import { text } from "./base.js";

const expected = /joão|ao/gi;

console.log(text.match(expected)); // function match is string

console.log(text.replace(/(João|Viviana)/gi, "<$1>")); // function match is string

console.log(
  text.replace(/(João|Viviana)/gi, function (input) {
    // get an params
    return `${input.toUpperCase()}`;
  })
);
