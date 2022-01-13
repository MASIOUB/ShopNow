
const main = document.querySelector("main");
const form = document.querySelector("form");
const div = document.querySelector("#div");


var erreur;

let reference = document.querySelector("#reference");
let nom = document.querySelector("#name");
let category = document.querySelector("#category");
let quantity = document.querySelector("#quantity");

const popup = document.createElement("div");
popup.classList.add("popup");


const overlay = document.createElement("div");
overlay.classList.add("overlay");

const paragraph = document.createElement("p");
paragraph.classList.add("erreur");


function erreurMessage() {
    erreur = "";
    erreur = "Something is wrong! Please check your data.";
    paragraph.innerText = erreur;
    div.appendChild(paragraph);
}

function popupReselt() {
    popup.innerText = "Well regester"
    main.appendChild(popup);
    main.appendChild(overlay);
    popup.append(button);
    if(div.contains(paragraph)){
        paragraph.remove();
    }
}

const button = document.createElement("button");
button.classList.add("button");
button.innerText = "OK";
button.addEventListener("click", () => {
  popup.remove();
  overlay.remove();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(reference.value == "" || category.value == "" || quantity.value == "" || nom.value == ""){
        erreurMessage();
    }
    else{
        popupReselt();
    }   
})

