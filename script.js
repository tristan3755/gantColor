document.querySelector(".cercle1").addEventListener("click", (event) => {
  cercle();
});

window.addEventListener("scroll", (event) => {
  retourCercle();
});

function cercle() {
  let monCercle = document.querySelector(".cercle1");
  monCercle.style.clipPath = "circle(100% at center)";
  monCercle.style.zIndex = "10";

  let monText = document.querySelector(".text");
  monText.style.opacity = "0.7";
}

function retourCercle() {
  let monCercle = document.querySelector(".cercle1");
  monCercle.style.clipPath = "circle(100px at 25% center)";
  monCercle.style.zIndex = "0";

  let monText = document.querySelector(".text");
  monText.style.opacity = "0";
}

document.querySelector(".cercle2").addEventListener("click", (event) => {
  cercle2();
});

window.addEventListener("scroll", (event) => {
  retourCercle2();
});

function cercle2() {
  let monCercle = document.querySelector(".cercle2");
  monCercle.style.clipPath = "circle(100% at center)";
  monCercle.style.zIndex = "10";
  let monText = document.querySelector(".text1");
  monText.style.opacity = "0.7";
}

function retourCercle2() {
  let monCercle = document.querySelector(".cercle2");
  monCercle.style.clipPath = "circle(100px at 50% center)";
  monCercle.style.zIndex = "0";
  let monText = document.querySelector(".text1");
  monText.style.opacity = "0";
}

document.querySelector(".cercle3").addEventListener("click", (event) => {
  cercle3();
});

window.addEventListener("scroll", (event) => {
  retourCercle3();
});

function cercle3() {
  let monCercle = document.querySelector(".cercle3");
  monCercle.style.clipPath = "circle(100% at center)";
  monCercle.style.zIndex = "10";
  let monText = document.querySelector(".text2");
  monText.style.opacity = "0.7";
}

function retourCercle3() {
  let monCercle = document.querySelector(".cercle3");
  monCercle.style.clipPath = "circle(100px at 75% center)";
  monCercle.style.zIndex = "0";
  let monText = document.querySelector(".text2");
  monText.style.opacity = "0";
}

/*****************************************************************hover cercle**********************************************************/

document.querySelector(".cercle1").addEventListener("mouseover", (event) => {
  hover1();
});

document.querySelector(".cercle1").addEventListener("mouseout", (event) => {
  deHover1();
});

function hover1() {
  let monHover1 = document.querySelector(".contener");
  monHover1.style.backgroundColor = "#FB8F08";
  monHover1.style.transition = "2s";
}

function deHover1() {
  let monHover1 = document.querySelector(".contener");
  monHover1.style.backgroundColor = "white";
}

document.querySelector(".cercle2").addEventListener("mouseover", (event) => {
  hover2();
});

document.querySelector(".cercle2").addEventListener("mouseout", (event) => {
  deHover1();
});

function hover2() {
  let monHover1 = document.querySelector(".contener");
  monHover1.style.backgroundColor = "#AC3731";
  monHover1.style.transition = "2s";
}

document.querySelector(".cercle3").addEventListener("mouseover", (event) => {
  hover3();
});

document.querySelector(".cercle3").addEventListener("mouseout", (event) => {
  deHover1();
});

function hover3() {
  let monHover1 = document.querySelector(".contener");
  monHover1.style.backgroundColor = "#3A4248";
  monHover1.style.transition = "2s";
}
