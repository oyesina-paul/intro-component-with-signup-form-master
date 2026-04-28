const submit =document.querySelector("#submit")
const wrappers = document.querySelectorAll(".wrapper")

const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

submit.addEventListener("click", validate)

function validate(e) {
    e.preventDefault()

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    const firstNameError = wrappers[0].querySelector(".errorMessage");
    const lastNameError = wrappers[1].querySelector(".errorMessage");
    const passwordError = wrappers[2].querySelector(".errorMessage");
    const emailError = wrappers[3].querySelector(".errorMessage");

    const firstIcon = wrappers[0].querySelector("img");
    const lastIcon = wrappers[1].querySelector("img");
    const emailIcon = wrappers[2].querySelector("img");
    const passwordIcon = wrappers[3].querySelector("img");

   

    if (firstNameValue === "") {
        firstNameError.style.display = "block"
        firstIcon.style.display = "block"
    } else {
         firstNameError.style.display = "none"
         firstIcon.style.display = "none"
    }

    if (lastNameValue === "") {
        lastNameError.style.display = "block"
        lastIcon.style.display = "block"
    } else {
         lastNameError.style.display = "none"
         lastIcon.style.display = "none"
    }

    if (!isEmail(emailValue)) {
        emailError.style.display = "block"
        emailIcon.style.display = "block" 
    } else {
        emailError.style.display = "none"
        emailIcon.style.display = "none" 
    }
 
    if (passwordValue === "") {
        passwordError.style.display = "block"
        passwordIcon.style.display = "block"
    } else {
         passwordError.style.display = "none"
         passwordIcon.style.display = "none"
    }
}

function isEmail(emailValue) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    return emailPattern.test(emailValue)
}

