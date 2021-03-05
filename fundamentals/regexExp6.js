import { cpfs } from "./base.js";

// ^ -> begins with
// $ -> ends with
// [^] -> denial
// m -> multiline

const cpf = " 627.210.983-54";

const cpfRegExp = /^((\d{3}\.){2}\d{3}-\d{2})$/g;
const cpfRegExp2 = /((\d{3}\.){2}\d{3}-\d{2})/g;
const cpfRegExp3 = /^((\d{3}\.){2}\d{3}-\d{2})$/gm;

console.log(cpf.match(cpfRegExp));
console.log(cpf.match(cpfRegExp2));
console.log(cpfs.match(cpfRegExp));
console.log(cpfs.match(cpfRegExp2));
console.log(cpfs.match(cpfRegExp3));
