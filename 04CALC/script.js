var consoleValue = ""; 
var numbers = [0.0,0.0]; 
var whichNumber = 0; /* Keeps track on which number: 0=firstNumber, 1=secondNumber*/
var operandSign = ["",""]; 

function added(x) { 
	if (consoleValue.length < 20){ //max length of the numbers are 20 chars
		if (x =="."){ // now dot has added
		if (consoleValue.includes(".") == false){ // only one dot per number!
			if(consoleValue.length == 0) { // if you wanna start with 0.111 i.e. 
				consoleValue = "0.";
				writeInto(consoleValue);
			} else {
			consoleValue +=".";
			writeInto(consoleValue);  
		}}}
			else {
				if (consoleValue=="0"){	consoleValue = x.toString(); // if starts with zero but still an Integer not float, and x need to be string for concatenation
										writeInto(consoleValue); }
				else {	consoleValue += x; 
						writeInto(consoleValue);
								 }}
					}
		}

function writeInto (consoleValue) {
		document.getElementById("console").innerHTML = consoleValue;
		document.getElementById("console").value = consoleValue;
		numbers[whichNumber] = parseFloat(consoleValue);
}

function operand(x){
	firstNumber = parseFloat(consoleValue);
	operandSign[1] = x 
			switch (operandSign[0]) {
				case "+": addition(); break; 
				case "-": substraction(); break; 
				case "*": multiplication(); break; 
				case "/": divide(); break;  /* 0-val osztás tmég innen kiszedni*/
			} 
		console.log (numbers[0], numbers[1], operandSign [0], operandSign [1]); 
		operandSign [0] = x;
		numbers[1] = 0;
		whichNumber = 1; 
		clearCleanConsole();
		result(); 
} 

/* Clear the prompt and its' value */
function clearCleanConsole (){
	document.getElementById("console").innerHTML = " "; //clean the console to empty 
	consoleValue = ""; //clean the variable to empty 
}
/*when you hit the clear button, it happens*/
function clearCleanButton(){
	clearCleanConsole(); 
	numbers = [0,0];
	operandSign = [" "," "]
	whichNumber = 0; 
}
/* write result into console prompt and if you divided with zero let everything be zero*/
function result(){
	document.getElementById("console").innerHTML = numbers[0];
	if (numbers[0]=="nullával nem osztunk!"){
		numbers[0]=0;
		numbers[1]=1;
	}
}
/* The +,-,/,* AND /0 , = */
function addition() {
	numbers[0]= numbers[0]+numbers[1];
}
function substraction() {
	numbers[0]= numbers[0]-numbers[1];
}
function multiplication(){
	numbers[0]= numbers[0]*numbers[1];
}
function divide () {
	if (numbers[1]==0){
		divideZero();	}
	else{
	numbers[0]= numbers[0]/numbers[1];
}  
}
function divideZero() {
	numbers[0]="nullával nem osztunk!"; 
}

function solution() {
	operand(operandSign[0]);
	numbers[1] = 0;  
	whichNumber = 0; 
	operandSign = [" "," "];
}
