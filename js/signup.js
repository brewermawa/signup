let pw1 = document.querySelector("#pw1");
let pw2 = document.querySelector("#pw2");
let inputForm = document.querySelector("#input-form");
let button = document.querySelector(".submit-button");
let passwordError = document.querySelector(".password-error");

inputForm.addEventListener("submit", (e) => {

    e.preventDefault();

    if (pw1.value !== pw2.value) {
        passwordError.style.display = "inline"
    }
    else {
        inputForm.submit();
    };
});