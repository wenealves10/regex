import { logs } from "./base.js";

console.log(logs);
console.log(logs.match(/.+[^in]active$/gim));

// Positive LookHead (returns if the phrase has Active)
console.log(logs.match(/.+(?=[^in]active)/gim));

// Positive LookHead (returns if the phrase has Inactive)
console.log(logs.match(/.+(?=\s+inactive)/gim));

// Negative LookHead (Don't give me back those words  Active);
console.log(logs.match(/^(?!.+[^in]active).+$/gim));

// Negative LookHead (Don't give me back those words  Inactive);
console.log(logs.match(/^(?!.+inactive).+$/gim));

// Positive LookBehind (Returns the phrases behind ONLINE);
console.log(logs.match(/(?<=ON\s+)\S+.*/gim));

// Negative LookBehind (Returns the phrases that are not behind ON );
console.log(logs.match(/^.+(?<!ON.+)$/gim));

const cpfs = `
624.214.854-41
628.214.854-41
624.219.858-41
614.214.856-41
622.214.853-41
621.214.857-41
111.111.111-11
888.888.888-88
999.999.999-99
222.222.222-22
333.333.333-33
000.000.000-01
aaa.aaa.aaa-aa
`;

console.log(
  cpfs.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}-\d{2}$/gm)
);
