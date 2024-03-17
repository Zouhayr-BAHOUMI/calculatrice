
let result = document.querySelector(".resultat");
let buttons = document.querySelectorAll(".button");

let dernierNombre = '';
let dernierOperation = '';
let currentAffichage = '';


buttons.forEach(button =>{
    button.addEventListener("click", function(){
        if(button.dataset.number){
            currentAffichage += this.dataset.number;
            result.textContent = currentAffichage
        }
        if(button.dataset.action === "add"){
            updateAffichage("+");
        }
        if(button.dataset.action === "soustraction"){
            updateAffichage("-");
        }
        if(button.dataset.action === "multiplication"){
            updateAffichage("*");
        }
        if(button.dataset.action === "division"){
            updateAffichage("/");
        }
        if(button.dataset.action === "rest"){
            updateAffichage("%");
        }
        if(button.dataset.action === "clear"){
            clear();
        }
        if(button.dataset.action === "equal"){
            equalCalculate();
        }
        if(button.dataset.action === "delete"){
            deleteLast();
        }
    });
});


function affichageOnScreen(number){
    result.innerHTML += number;
}

function clear(){
    result.textContent="";
    dernierNombre = '';
    dernierOperation = '';
    currentAffichage = '';
}

function updateAffichage(operation){
    if(currentAffichage !== '' && dernierNombre !== ''){
        let calculateResult = calculateByOperation(parseFloat(dernierNombre),parseFloat(currentAffichage), dernierOperation);
        result.textContent = calculateResult + operation;
        currentAffichage = '';
        dernierNombre = calculateResult;
        dernierOperation = operation;
    }else{
        result.textContent = currentAffichage + operation;
        dernierNombre = currentAffichage;
        currentAffichage = '';
        dernierOperation = operation;
    }
}

function calculateByOperation(number1,number2,operation){
    switch(operation){
        case "+" :
            return number1 + number2;
            break;
        case "-" :
            return number1 - number2;
            break;
        case "*" :
            return number1 * number2;
            break;
        case "/" :
            if(number2 === 0){
                result.textContent= "division par 0 imposible";
                return;
            }
            return number1 / number2;
            break;
        case "%" :
            return number1 % number2;
            break;
        default :
            result.textContent = "somthing wrong";
                    
    }
}


function equalCalculate() {
    if(currentAffichage !== '' && dernierNombre !== ''){
        let calculateResult = calculateByOperation(parseFloat(dernierNombre),parseFloat(currentAffichage), dernierOperation);
        result.textContent = calculateResult;
        currentAffichage = '';
        dernierNombre = '';
        dernierOperation = '';
    }
//    let affichage = result.innerHTML;
//    let nombres = affichage.split(/[\+\-\*\/%]/).map(Number);
//    let operation = affichage.match(/[+ \- % / *]/);

//    let number1 = nombres[0];
//    let number2 = nombres[1];
//    let op = operation[0];

//    let calculateResult;

//    switch(op){
//         case "+" :
//             calculateResult= number1 + number2;
//             break;
//         case "-" :
//             calculateResult= number1 - number2;
//             break;
//         case "*" :
//             calculateResult= number1 * number2;
//             break;
//         case "/" :
//             if(number2 === 0){
//                 result.textContent= "division par 0 imposible";
//                 return;
//             }
//             calculateResult= number1 / number2;
//             break;
//         case "%" :
//             calculateResult= number1 % number2;
//             break;
//         default :
//             result.textContent = "somthing wrong";
            
//    }

//         result.textContent = calculateResult;

   
}


function deleteLast(){
    let screen = result.textContent;

    if(screen.length>0){
        let removeLast = screen.slice(0,-1);
        result.textContent= removeLast;
        currentAffichage = removeLast;
    }
}

clear();
