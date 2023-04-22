



// sign in to sign up

const logInCover = document.querySelector(".log-in-cover");

const signUpCover = document.querySelector(".sign-up-cover");


const signUpLink = document.querySelector(".sign-up-link");

const signInLink = document.querySelector(".sign-in-link");


const signInBtn = document.querySelector(".sign-in-btn");

const signUpBtn = document.querySelector(".sign-up-btn");


const blackDisc = document.querySelector(".black-disc");





function startUp() {
    blackDisc.classList.toggle("active");

    setTimeout(() => {
        logInCover.classList.toggle("hide");
        signUpCover.classList.toggle("hide");
        errorMessage.innerText = "";
    }, 500)

}

signUpLink.addEventListener("click", startUp);
signInLink.addEventListener("click", startUp);















// getvalue from input



const logInputText = logInCover.querySelectorAll("input[type]");

var mail = logInputText[0];
var password = logInputText[1];

const signInputText = signUpCover.querySelectorAll("input[type]");

var nameS = signInputText[0];
var mailS = signInputText[1];
var dateS = signInputText[2];
var passwordS = signInputText[3];













// date logo remove


const userDate = document.querySelector(".user-date");


dateS.addEventListener("focus", () => {
    userDate.style.display = "none";
})
dateS.addEventListener("blur", () => {
    userDate.style.display = "block";
})

let dateContent;

function TtoD() {
    if (dateContent == "" ||  dateContent == undefined) {
        dateS.type = "date";
    }
    else {
        dateS.value = dateContent;
        dateS.type = "date";
    }
}

function DtoT() {
    dateContent = dateS.value;
    dateS.type = "text";
    dateS.value = dateContent.slice(8, 10) + "/" + dateContent.slice(5, 7) + "/" + dateContent.slice(0, 4);
    if (dateContent == "") {
        dateS.value = "";
    }
}











// password show, hide and check



const passwordEye = document.querySelectorAll(".password-eye");

const passwordEyeSlash = document.querySelectorAll(".password-eye-slash");

const errorMessage = document.querySelectorAll(".error-message");


for (let passwordE of passwordEye) {

    passwordE.addEventListener("click", () => {

        password.type = "text";
        passwordS.type = "text";
        passwordEyeSlash[0].style.display = "block";
        passwordEyeSlash[1].style.display = "block";
        passwordEye[0].style.display = "none";
        passwordEye[1].style.display = "none";

    })

}


for (let passwordES of passwordEyeSlash) {

    passwordES.addEventListener("click", () => {

        password.type = "password";
        passwordS.type = "password";
        passwordEyeSlash[0].style.display = "none";
        passwordEyeSlash[1].style.display = "none";
        passwordEye[0].style.display = "block";
        passwordEye[1].style.display = "block";

    })

}




signUpBtn.addEventListener("click", () => {


    if (!(passwordS.value.match(/[a-z]/g) && passwordS.value.match(/[A-Z]/g) && passwordS.value.match(/[0-9]/g) && passwordS.value.match(/[^a-zA-Z\d]/g) && passwordS.value.length >= 8)) {
        errorMessage[1].style.top = "3%";
        errorMessage[1].innerText = "password must be contain at least 8 characters and combination of uppercase letters, lowercase letters, numbers and symbols.";
    }
    else {
        errorMessage[1].innerText = "";
        store();

        for (let x of signInputText) {
            x.value = "";
        }
        errorMessage[1].innerText = "account created successfully"
    }
})










// sign up data store


let info = [];

let obj1 = {
    fname: "test",
    mail: "test@gmail.com",
    date: "07-07-2007",
    password: "Test@123"
}

info.push(obj1);

console.log(obj1);


function store() {


    let obj2 = {
        fname: nameS.value,
        mail: mailS.value,
        date: dateS.value,
        password: passwordS.value
    }

    info.push(obj2);

    console.log(info);
}


let obj3 = {
    fname: "bond",
    mail: "bond@gmail.com",
    date: "07-07-2007",
    password: "bond@123"
}

info.push(obj3);









// sign in data check


signInBtn.addEventListener("click", () => {

    let userFound, userResult = false;


    for (let i of info) {

        if (userFound == true) {
            break;
        }

        if (mail.value == i.mail) {

            if (password.value == i.password) {

                userResult = "login successfull";

                setCookie();

                mail.value = "";
                password.value = "";

                window.open("dashboard2.html");

                userFound = true;
            }

            else if (password.value == "") {
                userFound = true;
                userResult = "please enter password";
            }

            else {
                userFound = true;
                userResult = "enter password is wrong";
            }
        }

        else {
            userResult = "user not found";
        }

    }

    errorMessage[0].innerText = userResult;
})








// cookies

function setCookie() {

    document.cookie = `mail = ${mail.value};`;
    document.cookie = `password = ${password.value};`;

}



function getCookie(cookieKey) {

    cookieKey = cookieKey + "=";



    let cook = document.cookie.split(";");


    for (let coo of cook) {


        while (coo.charAt(0) == " ") {
            coo = coo.substring(1);
        }

        if (coo.indexOf(cookieKey) == 0) {

            coo = coo.substring(cookieKey.length);
            return coo;
        }
    }
    return "";

}



function autoCookie() {


    let mailCookie = getCookie("mail");
    let passwordCookie = getCookie("password");

    mail.value = mailCookie;
    password.value = passwordCookie;

}

autoCookie();