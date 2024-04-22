/*changing the orµder og child elements
*/
const ol = document.querySelector('ol');
const lastElement = ol.lastElementChild;
ol.insertBefore(lastElement, ol.firstChild);

/*const secondH2 = document.querySelector("section:nth-of-type(2) > h2");
console.log(secondH2);
const thirdH2 = document.querySelector("section:nth-of-type(3) > h2");
console.log(thirdH2);

const secondSection = document.querySelector("section:nth-of-type(2)");
secondSection.insertBefore(thirdH2, secondH2);
document.querySelector("section:nth-of-type(3)").appendChild(secondH2);*/

const sections = document.querySelectorAll('section');
//console.log(sections);

const secondSection = sections[1];
//console.log(secondSection);
const secondSectionChildren = secondSection.children;
const a = secondSectionChildren[0];
//console.log(a);
const thirdSection = sections[2];
//console.log(thirdSection);
const thirdSectionChildren = thirdSection.children;
const div = thirdSectionChildren[0];
const b = div.children[0];
//console.log(b);
secondSection.appendChild(b);
thirdSection.appendChild(a);
secondSection.insertBefore(secondSection.lastChild, secondSection.firstChild);

thirdSection.remove();