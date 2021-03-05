import { cpfs as cpf } from "../fundamentals/base.js";

console.log(cpf);
console.log(
  cpf.match(/[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]-[0-9][0-9]/g)
);
console.log(cpf.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));
console.log(cpf.match(/(\d{3}\.){2}\d{3}-\d{2}/g));
