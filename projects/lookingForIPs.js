import { ipS as IPs } from "../fundamentals/base.js";

console.log(IPs);
console.log(IPs.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g));

const regexExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

for (let index = 0; index <= 300; index++) {
  const ips = `${index}.${index}.${index}.${index}`;
  console.log(ips, ips.match(regexExp));
}

console.log(IPs);
console.log(IPs.match(regexExp));
