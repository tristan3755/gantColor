document.querySelector(".cercle1").addEventListener("click", (event) => {
  cercle();
});

document.getElementById('return') .addEventListener("mouseenter", (event) => {
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
  monCercle.style.clipPath = "circle(100px at 20% center)";
  monCercle.style.zIndex = "0";

  let monText = document.querySelector(".text");
  monText.style.opacity = "0";
}

document.querySelector(".cercle2").addEventListener("click", (event) => {
  cercle2();
});

document.getElementById('return1') .addEventListener("mouseenter", (event) => {
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
  monCercle.style.clipPath = "circle(100px at 40% center)";
  monCercle.style.zIndex = "0";
  let monText = document.querySelector(".text1");
  monText.style.opacity = "0";
}

document.querySelector(".cercle3").addEventListener("click", (event) => {
  cercle3();
});

document.getElementById('return2') .addEventListener("mouseenter", (event) => {
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
  monCercle.style.clipPath = "circle(100px at 60% center)";
  monCercle.style.zIndex = "0";
  let monText = document.querySelector(".text2");
  monText.style.opacity = "0";
}

document.querySelector(".cercle4").addEventListener("click", (event) => {
  cercle4();
});

document.getElementById('return3') .addEventListener("mouseenter", (event) => {
  retourCercle4();
 
});

function cercle4() {
  let monCercle = document.querySelector(".cercle4");
  monCercle.style.clipPath = "circle(100% at center)";
  monCercle.style.zIndex = "10";
  let monText = document.querySelector(".text3");
  monText.style.opacity = "0.7";
}

function retourCercle4() {
  let monCercle = document.querySelector(".cercle4");
  monCercle.style.clipPath = "circle(100px at 80% center)";
  monCercle.style.zIndex = "0";
  let monText = document.querySelector(".text3");
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
  monHover1.style.backgroundColor = "#939393";
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

document.querySelector(".cercle4").addEventListener("mouseover", (event) => {
  hover4();
});

document.querySelector(".cercle4").addEventListener("mouseout", (event) => {
  deHover1();
});

function hover4() {
  let monHover1 = document.querySelector(".contener");
  monHover1.style.backgroundColor = "#FB8F08";
  monHover1.style.transition = "2s";
}

/***********************************************************carroussel ************************************************************/

document.querySelector(".img1").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover1");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img1").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover1");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});

document.querySelector(".img2").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover2");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img2").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover2");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});

document.querySelector(".img3").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover3");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img3").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover3");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});
document.querySelector(".img4").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover4");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img4").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover4");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});

document.querySelector(".img5").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover5");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img5").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover5");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});
document.querySelector(".img6").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover6");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img6").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover6");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});

document.querySelector(".img7").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover7");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img7").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover7");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});

document.querySelector(".img8").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover8");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img8").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover8");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});

document.querySelector(".img9").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hover9");
  monHover.style.width = "100%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0.8";
});

document.querySelector(".img9").addEventListener("mouseout", (event) => {
  let monHover = document.querySelector(".hover9");
  monHover.style.width = "0%";
  monHover.style.height = "100%";
  monHover.style.opacity = "0";
});

////////////////////////////////////////////////qualité/////////////////////////////////////////////////////////////////
/*
document.querySelector(".n1").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hoverQ");

  monHover.style.opacity = "1";



  let bg = document.querySelector(".engagement");
  bg.style.backgroundImage = "url(./ressources/images/client.jpg)";
  bg.style.transition = "6s ease";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundRepeat = "no-repeat";
});

document.querySelector(".n2").addEventListener("mouseover", (event) => {
  let monHover = document.querySelector(".hoverQ1");

  monHover.style.opacity = "1";


  let bg = document.querySelector(".engagement1");
  bg.style.backgroundImage = "url(./ressources/images/outils.jpg)";
  bg.style.transition = "6s ease";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundRepeat = "no-repeat";
});

*/

/****************************************parralax *******************************************/

document.getElementById('parralax').addEventListener('mouseover',(event)=>{

  window.addEventListener('scroll',(event)=>{

    let image=document.getElementById('imageParralax')
  
    let valeur=window.scrollY
  
    image.style.top=valeur*0.1+'px'
    image.style.transition="1s"
  
    let text=document.querySelector('.parralaxText')

    text.style.top=valeur*-0.1+'px'
    text.style.transition="1s"


   


})


})





