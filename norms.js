let menuBtn = document.getElementById("menuBtn");
let mobileCon = document.getElementById("mobile");
let closeMenu = document.getElementById("closeMenu");


menuBtn.addEventListener("click", menuBtnfunc);
closeMenu.addEventListener("click", closeMenufunc);

function menuBtnfunc() {
    mobileCon.style.top = "0px"
}

function closeMenufunc() {
    mobileCon.style.top = "-500px"
}