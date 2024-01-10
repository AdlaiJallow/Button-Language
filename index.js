let fr = document.querySelector("h1");
let tri = document.querySelector("h1");
let wl = document.querySelector("h1");
let fl = document.querySelector("h1");
let ms = document.querySelector("h1")

let tru = document.querySelector("body");


function french() {
  fr.textContent = "Bonjour Mon Ami";
  tru.style.backgroundColor = "yellow";
  // tru.style.backgroundImage = url("images/")
}

function turkish() {
  tri.textContent = "Merhaba Arkadasim";
  tru.style.backgroundColor = "blue";
}

function wolof() {
  wl.textContent = "Nakam Sama Y";
  tru.style.backgroundColor = "green";
}

function fula() {
  fl.textContent = "Ajarama Bandira beh";
  tru.style.backgroundColor = "violet";
}

function sorseh() {
  ms.textContent = "Ibeh Nyadi";
  tru.style.backgroundColor = "pink";
}