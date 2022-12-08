// const a = 4;
// const b = 6;
// const c = "5" as unknown as number;
// const d = "cat";

// const multiply = (num1: number, num2: number) => {
//   console.log(`${num1} * ${num2} =`, num1 * num2);
// };

// const add = (num1: number, num2: number) => {
//   console.log(`${num1} + ${num2} =`, num1 + num2);
// };

// multiply(a, b);
// multiply(a, c);
// // multiply(a, d);

// add(a, b);
// add(a, c);
// // add(a, d);

// // cd typescript-project
// // npm i typescript --save-dev
// // npx tsc --init
// // touch index.ts

const myFunc = (num: number): number => {
  return num * num;
};

export default myFunc;
