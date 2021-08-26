const search = document.getElementsByClassName("search")[0];
const button = document.getElementsByClassName("btn")[0];
const input = document.getElementsByClassName("input")[0];

button.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});
