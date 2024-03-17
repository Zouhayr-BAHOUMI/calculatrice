let result = document.querySelector(".resultat");
let buttons = document.querySelectorAll(".button");

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        if(button.dataset.number){
            affichageOnScreen(this.dataset.number);
        }
        if(button.dataset.action === "add"){
            affichageOnScreen("+");
        }
        if(button.dataset.action === "soustraction"){
            affichageOnScreen("-");
        }
        if(button.dataset.action === "multiplication"){
            affichageOnScreen("*");
        }
        if(button.dataset.action === "division"){
            affichageOnScreen("/");
        }
        if(button.dataset.action === "rest"){
            affichageOnScreen("%");
        }
        if(button.dataset.action === "clear"){
            clear();
        }
        if(button.dataset.action === "equal"){
            calculate();
        }
    });
});


function affichageOnScreen(number){
    result.innerHTML += number;
}

function clear(){
    result.textContent="";
}

function calculate() {
   
   let affichage = result.innerHTML;
   let nombres = affichage.split(/[\+\-\*\/%]/).map(Number);
   let operation = affichage.match(/[+ \- % / *]/);

   let number1 = nombres[0];
   let number2 = nombres[1];
   let op = operation[0];

   let calculateResult;

   switch(op){
        case "+" :
            calculateResult= number1 + number2;
            break;
        case "-" :
            calculateResult= number1 - number2;
            break;
        case "*" :
            calculateResult= number1 * number2;
            break;
        case "/" :
            if(number2 === 0){
                result.textContent= "division par 0 imposible";
                return;
            }
            calculateResult= number1 / number2;
            break;
        case "%" :
            calculateResult= number1 % number2;
            break;
        default :
            result.textContent = "somthing wrong";
            
   }

        result.textContent = calculateResult;

   
}

clear();
