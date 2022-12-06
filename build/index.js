"use strict";
var a = 4;
var b = 6;
var c = "5";
var d = "cat";
var multiply = function (num1, num2) {
    console.log("".concat(num1, " * ").concat(num2, " ="), num1 * num2);
};
var add = function (num1, num2) {
    console.log("".concat(num1, " + ").concat(num2, " ="), num1 + num2);
};
multiply(a, b);
multiply(a, c);
// multiply(a, d);
add(a, b);
add(a, c);
// add(a, d);
// cd typescript-project
// npm i typescript --save-dev
// npx tsc --init
// touch index.ts
