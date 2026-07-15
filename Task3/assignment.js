"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task1 
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["F"] = 3] = "F";
})(Grade || (Grade = {}));
const student = {
    name: "Ali",
    age: 20,
    isPassed: true,
    grade: Grade.A
};
console.log(`${student.name} is ${student.age} years old. passed : ${student.isPassed}, Grade : ${student.grade}`);
student.age = "twenty";
// Error: Type 'string' is not assignable to type 'number'.
// Task2
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [1200, 30, 80, 250];
prices.push(20);
// Error: Property 'push' does not exist on type 'readonly number[]'.
let item = ["Laptop", 1200, true];
console.log(`Name: ${item[0]}, Price: ${item[1]}, In stock: ${item[2]}`);
// Task3
let a;
a = 1200;
a = "typeScript";
console.log(a.toUpperCase());
// any disables TypeScript's type checking it enables a variable to store any type of data, that is basically against the purpose of typescript. 
// // It allows any operation, which can cause runtime errors if the value is not the expected type.
let b;
b = "a string";
console.log(b.toUpperCase());
// 'b' is of type 'unknown'.
if (typeof (b) == "string") {
    console.log(b.toUpperCase());
}
let myDirection = "east";
console.log("My Direction:", myDirection);
myDirection = "diagonal";
// Type '"diagonal"' is not assignable to type 'Direction'.
//# sourceMappingURL=assignment.js.map