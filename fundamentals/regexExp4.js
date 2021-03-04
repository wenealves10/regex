import { html } from "./base.js";

console.log(html);
console.log("selected greedy", html.match(/<.+>.+<\/.+>/g)); // version greedy
console.log("selected non-greedy", html.match(/<.+?>.+?<\/.+?>/g)); // version non-greedy
