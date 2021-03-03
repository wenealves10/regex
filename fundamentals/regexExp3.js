import { files /*text*/ } from "./base.js";

/*

* (opt) => 0 ou N {0, }
+ (obg) => 1 ou N {1, }
? (opt) => 0 ou 1 {0, 1}
\ => caracteres of scape
{n, m} minimum and maximum
{10, } minimum is 10
{, 10} maximum is 10
{5, 10} minimum is 5 and maximum is 10
{10} only 10

*/

// const regexExp1 = /Jo+ão+/gi;
// console.log(text.match(regexExp1));

const regexExp2 = /\.jpe?g/gi;
const regexExp3 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const file of files) {
  file.match(regexExp2) && console.log(`${file} => ${file.match(regexExp2)}`);
  file.match(regexExp3) && console.log(`${file} => ${file.match(regexExp3)}`);
}
