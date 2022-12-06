const a = 4;
const b = 6;
const c = "5";
const d = "cat";

const multiply = (num1, num2) => {
  console.log(`${num1} * ${num2} =`, num1 * num2);
};

const add = (num1, num2) => {
  console.log(`${num1} + ${num2} =`, num1 + num2);
};

multiply(a, b);
multiply(a, c);
multiply(a, d);

add(a, b);
add(a, c);
add(a, d);
