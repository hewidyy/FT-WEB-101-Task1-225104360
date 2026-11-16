const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const nameInput = document.getElementById("name");
const helloLine = document.getElementById("hello-line");

nameInput.addEventListener("input", function () {
    const typedName = nameInput.value.trim();
    helloLine.textContent = typedName !== "" ? "Hello, " + typedName + "!" : "";
});
