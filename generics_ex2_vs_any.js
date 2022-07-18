"use strict";
exports.__esModule = true;
function getItems(items) {
    return new Array().concat(items);
}
var myNumArr = getItems([10, 20, 30]);
var myStrArr = getItems(["Hello", "JavaTpoint"]);
myNumArr.push(40); // Correct  
myNumArr.push("Hello TypeScript"); // Correct  
myStrArr.push("Hello SSSIT"); // Correct  
myStrArr.push(40); // Correct  
console.log("Using any type");
console.log("**************");
console.log(myNumArr); // [10, 20, 30, 40, "Hello TypeScript"]  
console.log(myStrArr); // ["Hello", "JavaTpoint", "Hello SSSIT", 40] 
console.log("Using generic type");
console.log("******************");
function getItems1(items) {
    return new Array().concat(items);
}
var arrNumber = getItems1([10, 20, 30]);
var arrString = getItems1(["Hello", "JavaTpoint"]);
//let arrBoolean=getItems1<boolean>([true,false,true]);  
arrNumber.push(40); // Correct  
// uncomment below line to see error
//arrNumber.push("Hi! Javatpoint"); // Compilation Error  
arrString.push("Hello TypeScript"); // Correct  
// uncomment below line to see error
//arrString.push(50); // Compilation Error 
// arrBoolean.push(true);//Correct
// arrBoolean.push(99);//Compilation Error
console.log(arrNumber);
console.log(arrString);
