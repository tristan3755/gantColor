
let exit = false;
console.log(exit);

let ouverture = false;
console.log(ouverture);

let exit1 = false;
console.log(exit1);

let ouverture1 = false;
console.log(ouverture1);

let exit2 = false;
console.log(exit1);

let ouverture2 = false;
console.log(ouverture1);

let exit3 = false;
console.log(exit1);

let ouverture3 = false;
console.log(ouverture1);

let isSafari = window.chrome!== undefined;

document.querySelector(".cercle1").addEventListener("click", (event) => {
  cercle();
  ouverture = !ouverture;
  console.log(ouverture);
  exit = false;
});

function cercle() {
  let monCercle = document.querySelector(".cercle1");
  monCercle.style.clipPath = "circle(100% at center)";
  monCercle.style.zIndex = "10";
  let monText = document.querySelector(".text");
  monText.style.opacity = "0.7";
}

document.getElementById("return").addEventListener("click", (event) => {
  retourCercle();
  exit = !exit;
  ouverture = false;
  console.log(exit);
  event.stopPropagation();
});

function retourCercle() {
  let monCercle = document.querySelector(".cercle1");
  monCercle.style.clipPath = "circle(100px at 20% center)";
  monCercle.style.zIndex = "0";
  let monText = document.querySelector(".text");
  monText.style.opacity = "0";
}

/********stoppropagation  event    variable sur le click pour tester  */

document.querySelector(".cercle2").addEventListener("click", (event) => {
  cercle2();
  ouverture1 = !ouverture1;
  console.log(ouverture1);
  exit1 = false;
});

document.getElementById("return1").addEventListener("click", (event) => {
  retourCercle2();
  exit1 = !exit1;
  ouverture1 = false;
  console.log(exit1);
  event.stopPropagation();
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
  ouverture2 = !ouverture2;
  console.log(ouverture2);
  exit2 = false;
});

document.getElementById("return2").addEventListener("click", (event) => {
  retourCercle3();
  exit2 = !exit2;
  ouverture2 = false;
  console.log(exit2);
  event.stopPropagation();
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
  ouverture3 = !ouverture3;
  console.log(ouverture3);
  exit3 = false;
});

document.getElementById("return3").addEventListener("click", (event) => {
  retourCercle4();
  exit3 = !exit3;
  ouverture3 = false;
  console.log(exit3);
  event.stopPropagation();
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

/****************************************parralax *******************************************/

window.addEventListener("scroll", (event) => {
  let image = document.getElementById("imageParralax");

  let valeur = window.scrollY;

  image.style.top = (valeur*0.08)+ "px";
  image.style.transition = "0.2s";

  let text = document.querySelector(".parralaxText");

  text.style.top = valeur * -0.08 + "px";
  text.style.transition = "0.2s";
});

window.addEventListener("scroll", (event) => {
  let image = document.getElementById("imgBox2");

  let valeur = window.scrollY;

  image.style.top = valeur * +0.07 + "px";
  image.style.transition = "0.2s";

  let text = document.querySelector(".parralaxText2");

  text.style.top = valeur * -0.07 + "px";
  text.style.transition = "0.2s";
});

window.addEventListener("scroll", (event) => {
  nav();
});

function nav() {
  let nav = document.querySelector("header");
  nav.style.display = "flex";
}

/**********navBarResponsive ******************/

document.getElementById("boutonMenu").addEventListener("click", (event) => {
  menu();
});

document.getElementById("croix").addEventListener("click", (event) => {
  menuOff();
});

function menu() {
  let menu = document.getElementById("menuResponsive");
  menu.style.display = "flex";
}

function menuOff() {
  let menu = document.getElementById("menuResponsive");
  menu.style.display = "none";
}
{
let mesLiens = [
  {
    name: "Home",
    lien: "#",
    lienSafari: "#",
  },

  {
    name: "A propos",
    lien: "#sect2",
    lienSafari: "#mobileCategorie",
  },

  {
    name: "Nos Valeurs",
    lien: "#parralax",
    lienSafari: "#parralax",
  },

  {
    name: "Nos Réalisations",
    lien: "#sect3",
    lienSafari: "#sect3",
  },

  {
    name: "Contact",
    lien: "#sect4",
    lienSafari: "#sect4",
  },
];

for (i in mesLiens) {
  if(isSafari || window.matchMedia("(max-width:900px)").matches){
    let monMenu = document.createElement("a");
    monMenu.href = mesLiens[i].lienSafari;
    monMenu.innerHTML = mesLiens[i].name;
    monMenu.addEventListener("click", (event) => {
      let menu = document.getElementById("menuResponsive");
      menu.style.display = "none";
    });
    document.getElementById("liens").appendChild(monMenu);
    
  }else{
    let monMenu2 = document.createElement("a");
    monMenu2.href = mesLiens[i].lien;
    monMenu2.innerHTML = mesLiens[i].name;
    monMenu2.addEventListener("click", (event) => {
      let menu = document.getElementById("menuResponsive");
      menu.style.display = "none";
      
    });
    document.getElementById("liens").appendChild(monMenu2);
  }
 
  
}



}
/**********navBarResponsive ******************/

/***************************************detecter le tas de merde de safari  **********************************************/


if (isSafari){ 
  
 let mesBulles=document.getElementById('sect2')
 mesBulles.style.display="none"

 let mobile=document.getElementById('mobileCategorie')
 mobile.style.display="flex"
 


  console.log("Safari, yeah!")

}



/*******************************************************carroussel ********************************************************/

const slider=document.querySelector('.corpsCarroussel')
const imageSlider=document.querySelectorAll('.corpsCarroussel img')

const precedent=document.getElementById('gauche')
const suivant=document.getElementById('droite')

let counter=0

const taille=imageSlider[0].clientWidth

slider.style.transform='translateX('+ (-taille * counter) + 'px)'

suivant.addEventListener('click',(event)=>{
next()
})

precedent.addEventListener('click',(event)=>{
preced()

})

function next(){
  if(counter>=imageSlider.length-1) return;
  slider.style.transition='transform 0.4s ease-in-out'
  counter++
  
  slider.style.transform='translateX('+ (-taille * counter) + 'px)'

}

function preced(){
  if(counter<=0) return;
  slider.style.transition='transform 0.4s ease-in-out'
  counter--
  
  slider.style.transform='translateX('+ (-taille * counter) + 'px)'

}

next()
preced()