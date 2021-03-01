// g - global (finds all occurrences );
// i - insensitive;
// (()()) - groups;
// | - or

import { text } from "./base.js";

const regExp1 = /(joão|maria|pedro)( Gordo não)/gi;
const found = regExp1.exec(text);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
