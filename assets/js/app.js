let t = document.querySelector(".toggle-circle");

t.addEventListener("click", function () {
    t.classList.toggle("toggle-circle-right")
});
const menuicons = document.querySelector(".menubar");
const navitm = document.querySelector(".nav-itm");
menuicons.addEventListener("click", function () {
    navitm.classList.toggle("show")
});
