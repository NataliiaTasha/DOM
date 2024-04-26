//user name 
const element = document.getElementById("display-firstname");
// console.log(element);
const userName = document.getElementById("firstname");

function nameForm() {
    const firstName = document.getElementById("firstname").value;
    element.innerHTML = firstName;
}
userName.addEventListener("keyup", nameForm);

//age
const age = document.getElementById("age");
const truth = document.getElementById("a-hard-truth");

function hardToSwallow() {
    if (age.value < 18) {
        truth.style.visibility = "hidden";
    } else {
        truth.style.visibility = "visible";
    }
}

age.addEventListener("keyup", hardToSwallow)

//password
const pwd = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwd-confirm");

function password() {
    if (pwd.value.length < 6) {
        pwd.style.borderColor = "red";
    } else {
        pwd.style.borderColor = "";
    }
}

pwd.addEventListener("keyup", password); 

function passwordConfirm() {
    if (pwdConfirm.value !== pwd.value) {
        pwdConfirm.style.borderColor = "red";
        
    } else {
        pwdConfirm.style.borderColor = "";
    }
}
pwdConfirm.addEventListener("keyup", passwordConfirm);

//dark

const selectMode = document.getElementById("toggle-darkmode");
const body = document.querySelector("body");

function dark() {
    if (selectMode.value === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else if (selectMode.value === "light") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } 
} 

selectMode.addEventListener("change", dark);

   



