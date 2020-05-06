window.onload = function(){
  var questCount = 0;
  var passCount = 0;
  var scoreTotal = 0;
  var firstNum = 0;
  var secondNum = 0;
  var operator = "";
  var solution = 0;
  
  function getNums(){
	var number = Math.floor(Math.random() * 100) + 1;
	return number;
  };
  
  function getOps(){
	var operators = "+-*/";
    var operand = operators.charAt(Math.floor(Math.random() * operators.length));
    return operand;	
  };
  
  function solve(){
	if (operator === "+"){
		solution = (firstNum + secondNum);
		return solution;
	} else if (operator === "-"){
		solution = (firstNum - secondNum);
		return solution;
	} else if (operator === "*"){
		solution = (firstNum * secondNum);
		return solution;
	} else if (operator === "/"){
		solution = (firstNum / secondNum).toFixed(2);
		return solution;
	};
  };
  
  mainGame = function(){
	firstNum = getNums();
	secondNum = getNums();
	operator = getOps();
	solution = solve();
	document.getElementById("operator").innerHTML = operator;
    document.getElementById("first").innerHTML = firstNum;
    document.getElementById("second").innerHTML = secondNum;  
	document.getElementById("questbox").innerHTML = (questCount + 1);
	scoreTotal = (Math.floor((passCount / questCount) * 100));
	if (isNaN(scoreTotal)){
	  document.getElementById("scorebox").innerHTML = "-";  
    } else {
	    document.getElementById("scorebox").innerHTML = scoreTotal + "%";
    };
  }
  mainGame();
  
  answerButton = function(){
	var userAnswer = Number(document.getElementById("userAnswer").value);
	if (isNaN(userAnswer)){
		alert ("Invalid entry. Please enter a valid number");
	}  else if (userAnswer === solution){
		document.getElementById("passFail").innerHTML = "CORRECT! The answer was " + solution + ".";
		passCount += 1;
		questCount += 1;
		mainGame();
	} else {
		document.getElementById("passFail").innerHTML = "INCORRECT! The answer was " + solution + ".";
		questCount += 1;
		mainGame();
	}
  }
};