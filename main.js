let result = document.querySelector(".resultat");
let buttons = document.querySelectorAll(".button");

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        ajouterNumber(this.dataset.number);
    })
})


function clear(){
    result.textContent="";
}

function ajouterNumber(number){
    result.innerHTML += number;
}

clear();
