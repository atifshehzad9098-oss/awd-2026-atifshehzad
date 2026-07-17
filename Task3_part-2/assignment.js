"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe(pm) {
    if (pm.type === "card") {
        return `Card Payment: (ID: ${pm.id}), Last 4 digits: ${pm.last4} 
         ${pm.nickname ? `, Nickname: ${pm.nickname}` : ""}`;
    }
    else {
        return `Paypal Payment: (ID: ${pm.id}), Email : ${pm.email} 
        ${pm.nickname ? `, Nickname: ${pm.nickname}` : ""}`;
    }
}
console.log(describe({ id: 1, type: "card", last4: "9898", nickname: "Personal Card", }));
console.log(describe({ id: 2, type: "paypal", email: "abc123@gmail.com" }));
// Task 2
// Q -1
function getOrDefault(value, fallback) {
    if (value) {
        return value;
    }
    else {
        return fallback;
    }
}
console.log(getOrDefault("Ali", "Ahmed"));
console.log(getOrDefault(undefined, "Ahmed"));
console.log(getOrDefault(undefined, 0));
// Q - 2
class Box {
    value;
    constructor(v) {
        this.value = v;
    }
    get() {
        return this.value;
    }
    set(v) {
        this.value = v;
    }
}
let b1 = new Box("Pen");
console.log(b1.get());
b1.set("Blue Pen");
console.log(b1.get());
let b2 = new Box(10);
console.log(b2.get());
b2.set(20);
console.log(b2.get());
// Q -3
function wrapInPromise(value) {
    return Promise.resolve(value);
}
wrapInPromise("Hello").then((data) => {
    console.log(data);
});
wrapInPromise(100).then((data) => {
    console.log(data);
});
wrapInPromise(true).then((data) => {
    console.log(data);
});
;
;
;
function area(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "triangle":
            return (shape.base * shape.height) / 2;
        default:
            const _exhaustive = shape;
            return _exhaustive;
    }
}
console.log(area({ type: "circle", radius: 5 }));
console.log(area({ type: "square", side: 4 }));
console.log(area({ type: "triangle", base: 8, height: 6 }));
let todos = [];
function addTodo(todo) {
    todos.push(todo);
}
function getTodos() {
    return todos;
}
function removeTodo(index) {
    todos.splice(index, 1);
}
addTodo({ id: 1, title: "JS", completed: false });
addTodo({ id: 2, title: "HTML", completed: true });
addTodo({ id: 3, title: "CSS", completed: false });
removeTodo(2);
console.log(getTodos());
// Q - 3
function pluck(obj, key) {
    return obj[key];
}
const student = {
    name: "Ali",
    age: 20,
    isPassed: true,
};
console.log(pluck(student, "name"));
console.log(pluck(student, "age"));
console.log(pluck(student, "isPassed"));
const book = {
    title: "TypeScript Basics",
    pages: 250,
};
console.log(pluck(book, "title"));
console.log(pluck(book, "pages"));
// pluck(student, "salary"); // Error
//# sourceMappingURL=assignment.js.map