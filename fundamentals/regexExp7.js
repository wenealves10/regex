import { html2 } from "./base.js";

// $1 $2 $3 -> rearview
// ?: -> ignore

// console.log(html2);
// console.log(html2.match(/<.+>.+<\/.+>/g));
// console.log(html2.match(/<.+?>.+?<\/.+?>/g));
// console.log(html2.match(/<\w+>.+?<\/.+?>/g));
// console.log(html2.match(/<(\w+)>.+?<\/\1>/g));
// console.log(html2.match(/<(\w+).*>.+?<\/\1>/g));
// console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g));
// console.log(html2.match(/<(\w+)[\s\S]*>.+?<\/\1>/g));
// console.log(html2.match(/<(\w+)[\s\S]*?>.+?<\/\1>/g));
// console.log(html2.match(/<(\w+)([\s\S]*?)>([\s\S]*?)<\/\1>/g));
// console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
// console.log(html2.replace(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g, "$1"));
// console.log(html2.replace(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g, "$1 $2"));
// console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)<\/\2>/g, "$1 $2"));
// console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)<\/\2>/g, "$1"));
// console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, "$1$3$4"));
// console.log(
//   html2.replace(/(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, "$1 inicio $4 fim $5")
// );
console.log(
  html2.replace(
    /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g,
    "$1 inicio $3 fim $4"
  )
);
