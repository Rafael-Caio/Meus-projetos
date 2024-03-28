let texto = document.getElementById("texto");
let m3 = document.getElementById("m3");
let m2 = document.getElementById("m2");
let m1 = document.getElementById("m1");
let lua = document.getElementById("lua");
let carro = document.getElementById("carro");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    texto.style.marginTop = value * 2.5 + "px";
    m3.style.left = value * -1.5 + "px";
    m2.style.right = value * -1.5 + "px";
    m1.style.bottom = value * -1 + "px";
    lua.style.top = value * 2.5 + "px";
    lua.style.right = value * -1.5 + "px";
    carro.style.left = value * 1.5 + "px";
})
