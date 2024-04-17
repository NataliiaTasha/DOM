const section = document.createElement("section");
const students = ["Adrien", "Angel", "Arnaud", "Caroline", "David", "Denis", "Dorian", "Dylan", "Dzheylyan", "Giovanni", "Ilies", "Isabelle", "Julie", "Justine", "Jordan", "Laura", "Louis de Viron", "Ludovic", "Lyne", "Manu", "Maryam", "Mohamed", "Nathanael", "Stacy", "Tom", "Youris", "Zahra"];

students.sort(()  => Math.random() -0.5);

students.forEach(student => {
    const para = document.createElement("p");
    const node = document.createTextNode(student);
    para.appendChild(node);/*Appends child elements to parents elements.*/
    section.appendChild(para);
});

/*Finds an existing element and appens a new child element to it. */
const element = document.querySelector('article');
element.appendChild(section);

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    paragraph.style.backgroundColor = randomColor;

    let brightness = 0.212 * r + 0.7152 * g + 0.0722 * b;
    if (brightness < 128) {
        paragraph.style.color = 'white';
    }
})



