const body = document.querySelector("body");
const lightbtn = document.querySelector("#lightbtn");
const darkbtn = document.querySelector("#darkbtn");

lightbtn.onclick = function () {
    body.classList.remove("dark-theme")
    body.classList.add("light-theme")
}

darkbtn.onclick = function () {
    body.classList.remove("light-theme")
    body.classList.add("dark-theme")
}