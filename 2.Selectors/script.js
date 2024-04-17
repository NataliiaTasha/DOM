/*
*/
let importantElements = document.getElementsByClassName("important");
for (let element of importantElements) {
    element.setAttribute("title", "This is an important item");
}

const allImages = document.querySelectorAll('img');
for (let element of allImages) {
    if (!element.classList.contains("important")) {
        element.style.display = "none";
    }
}

const allParagraphs = document.querySelectorAll('p');
for (let element of allParagraphs) {
    if (element.classList.length > 0) { /*determines if the element has a class*/ 
        console.log(element.textContent);
        console.log("class = " + element.classList.toString());
    }
    else {
        console.log(element.textContent);
    }
}

const paragraphs = document.querySelectorAll("p[class]");
for (let element of paragraphs) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    element.style.color = randomColor;
}