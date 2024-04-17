/*
*/

console.log(document.title);
document.title = "Modifying the DOM";

/*changing background color by selector*/
const body = document.querySelector("body");
document.body.style.backgroundColor = "#FF69B4";

/*generating random color*/

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let newColor = `rgb(${r}, ${g}, ${b})`;
document.body.style.backgroundColor = newColor;

const bodyChildren = document.body.children;
for (let element of bodyChildren) {
    alert(element.innerHTML); /*or alert(element.textContent)*/
}