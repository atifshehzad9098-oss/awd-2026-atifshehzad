// Task1 
enum Grade {
    A,
    B,
    C,
    F,
}
const student : {
    name : string,
    age : number,
    isPassed : boolean,
    grade : Grade 
} = {
    name : "Ali",
    age : 20,
    isPassed : true,
    grade : Grade.A
}
console.log(`${student.name} is ${student.age} years old. passed : ${student.isPassed}, Grade : ${student.grade}`);
student.age = "twenty";
// Error: Type 'string' is not assignable to type 'number'.

// Task2
let products : string[] = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices : ReadonlyArray<number> = [1200, 30, 80, 250];
prices.push(20);
// Error: Property 'push' does not exist on type 'readonly number[]'.

let item : [string, number, boolean] = ["Laptop", 1200, true];
console.log(`Name: ${item[0]}, Price: ${item[1]}, In stock: ${item[2]}`);

// Task3
let a : any;
a = 1200;
a = "typeScript";
console.log(a.toUpperCase());
// any disables TypeScript's type checking it enables a variable to store any type of data, that is basically against the purpose of typescript. 
// // It allows any operation, which can cause runtime errors if the value is not the expected type.

let b : unknown;
b = "a string";
console.log(b.toUpperCase());
// 'b' is of type 'unknown'.
if(typeof(b) == "string"){
    console.log(b.toUpperCase());
}

type Direction = "north" | "south" | "east" | "west";
let myDirection: Direction = "east";
console.log("My Direction:", myDirection);

myDirection = "diagonal";
// Type '"diagonal"' is not assignable to type 'Direction'.