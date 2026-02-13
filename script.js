const text = ["Web Developer", "UI Designer", "Python Programmer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
    if (index >= text.length) index = 0;
    currentText = text[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.slice(0, ++charIndex);
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentText.slice(0, --charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            index++;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();
