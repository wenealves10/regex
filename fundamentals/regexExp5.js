import { alphabet } from "./base.js";

// [abc] -> set [^] -> not
// [0-9] -> range
// [minimum-maximum]
// [^minimum-maximum] => anything but that

console.log(alphabet.match(/[abc]/g));
console.log(alphabet.match(/[abc]/gi));
console.log(alphabet.match(/[^abc]/gi));
console.log(alphabet.match(/[^abc]+/gi));
console.log(alphabet.match(/[abc123]/g));
console.log(alphabet.match(/[abc123]/gi));
console.log(alphabet.match(/[^abc123]/gi));
console.log(alphabet.match(/[^abc123]+/gi));
console.log(alphabet.match(/[0-9]/g));
console.log(alphabet.match(/[0-9]+/g));
console.log(alphabet.match(/[^0-2]+/g));
console.log(alphabet.match(/[\u00A0-\u00BA]/g));
console.log(alphabet.match(/[\u00A0-\u00BA]+/g));
console.log(alphabet.match(/\w/g));
console.log(alphabet.match(/\w+/g));
console.log(alphabet.match(/\W/g));
console.log(alphabet.match(/\W+/g));
console.log(alphabet.match(/\d/g));
console.log(alphabet.match(/\d+/g));
console.log(alphabet.match(/\D/g));
console.log(alphabet.match(/\D+/g));
console.log(alphabet.match(/\s/g));
console.log(alphabet.match(/\s+/g));
console.log(alphabet.match(/\S/g));
console.log(alphabet.match(/\S+/g));
