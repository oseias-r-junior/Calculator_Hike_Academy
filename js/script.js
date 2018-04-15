/**
*Returns the result of an operation over two numbers.
*Arguments: two valid numbers and one operation symbol.
Supports sum, subtraction, multiplication and division.
*/	

	//call button
document.getElementById("calculate-button").onclick=function(){
	
	//Get numbers inside the imput elements
let elem1 = document.getElementById('elem-1');
let elem2 = document.getElementById('elem-2');
	
	//Convertendo o tipo de varável
let val1 = parseInt(elem1.value);
let val2 = parseInt(elem2.value);
isNumber(val1,val2);


//Checking if the two boxes are fullfilled and executing the possible calculations
function isNumber (num1,num2) {
    if (isNaN(num1 && num2)) {
    	alert('Preencha os dois campos, Champs!');
    }else{
    //Taking the selected button at the "operation" group
    let choice = document.querySelector('input[name="operation"]:checked');
    let operation = choice.value;

	//Showing the result at the element <h2> "Resultado"
	let resultElement = document.getElementById('result');
	resultElement.innerText = getResult(val1,val2,operation);
}
	
		
	//Display result inside element with id "result"
function getResult(num1, num2, operation){ 
	if(operation === '+'){
		return num1 + num2;
	//retornar soma
	} else if (operation === '-'){
		return num1 - num2;
	//retornar subtração
	} else if (operation === '*'){
	//retornar multiplicação
		return num1 * num2;
	} else (operation === '/')
		return num1 / num2;
	//retornar divisão
	}
}

}
  







