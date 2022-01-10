//VERY EASY
var a = 7;
var b = 3;
console.log(`the difference between ${a} and ${b} is ${a-b}`);
 
//EASY
var name1 = "emmanuel";
var name2 = "eddie";
console.log(`the name ${name1} is longer than the name ${name2} by ${(name1.length - name2.length)} charaters. `);
 
//MEDIUM
let userInput = prompt(" enter a sentence: ");
   if (userInput == userInput.toUpperCase()){
       console.log(`you yelled ${userInput}`);
   }
   else if (userInput == userInput.toLowerCase()){
       console.log(`you whispered ${userInput}`);
   }
   else{
       console.log (`you neither whispered or yelled`);
   }
 
//HARD
function add(x,y){
   return x + y;
}
console.log(add(12,13));
// console.log(`you added ${x} and ${y} and got ${x + y}`);
 
function subtract (x,y){
   return x - y;
}
console.log(subtract(12,8));
 
function multiply (x,y){
   return x * y;
}
console.log (multiply(9,8));
 
function divide(x,y){
   return x/y;
}
console.log(divide(20,10));
 
 
 
//VERY HARD
 
let num1 = Number(prompt("enter your first number to either add, subtract, multiply or divide"));
let operatorInput = prompt(" enter a operator: ");
let num2 = Number(prompt(" enter another number: "));
 
if (operatorInput === "+"){
   console.log (`${num1} plus ${num2} equals ${num1 + num2}`);

}
else if (operatorInput === "-"){
   console.log(`${num1} minus ${num2} equals ${num1 - num2}`);

 }
else if (operatorInput === "*"){
   console.log(`${num1} times ${num2} equals ${num1 * num2}`);
  
}
else if (operatorInput === "/"){
   console.log(`${num1} divided by ${num2} equals ${num1 / num2}`);

}
else {
   console.log("input the values asked");
}

