const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const inputFeedback = document.querySelectorAll(".invalid-feedback");

function validateForm() {
    for (let i = 0; i < 4; i++) {
        if (input[i].value === "" || input[i].willValidate()) {
            input[i].classList.add("invalid-input");
            inputFeedback[i].classList.add("show");
        }
        if (input[i].value !== "") {
            input[i].classList.remove("invalid-input");
            inputFeedback[i].classList.remove("show");
        }
        if (input[3].checkValidity()) {
            input[3].classList.add("invalid-input");
            inputFeedback[3].classList.add("show");
        } else {
            input[3].classList.remove("invalid-input");
            inputFeedback[3].classList.remove("show");
        }
    }
}

for (element of input) {
    element.addEventListener("input", () => {
        validateForm();
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
})