let uncoverCards = 0;

let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let hits = 0;
let timeTimer = false;
let timer = 30;
let regresiveTimeId = null;
// Looking for html document

let showMovements = document.getElementById('movements');
let showHits = document.getElementById('hits');
let showTime = document.getElementById('time');

// Aleatory numbers generator

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);

// Functions

function timeCount() {
    regresiveTimeId = setInterval(()=>{
        timer--;
        showTime.innerHTML = `${timer}`;
        if(timer == 0) {
            clearInterval(regresiveTimeId);
            cardsBlock();
        }
    },1000);
}

function cardsBlock() {
    for (let i = 0; i<=15; i++) {
        let blockedCard = document.getElementById(i);
        blockedCard.innerHTML = numbers[i];
        blockedCard.disabled = true;
    }
}

// Principal Function

function uncover (id) {

    if(timeTimer == false) {
        timeCount();
        timeTimer = true;

    }

    uncoverCards++;
    console.log(uncoverCards)

    if (uncoverCards == 1) {
        // Show first number
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = firstResult;
        // Disable first button
        card1.disabled = true;
    } else if (uncoverCards == 2) {
        // Show second number
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = secondResult; 

        // Disable second button
         card2.disabled = true;

         // Increase movements
        movements++;
        showMovements.innerHTML = `${movements}`;

        if(firstResult == secondResult) {
            uncoverCards = 0;

            // Increase hits
            hits++;
            showHits.innerHTML = `${hits}`;
            
            if(hits == 4){
                showHits.innerHTML = `${hits}💣`;
            }
            if(hits == 8){
                clearInterval(regresiveTimeId);
                showHits.innerHTML = `${hits}🔥`;
                showTime.innerHTML = `YOU WIN!`;
                showMovements.innerHTML = `${movements}`;
            }
        } else {
            // Show values momentanly and cover again
            setTimeout(()=>{
            card1.innerHTML = ' ';
            card2.innerHTML = ' ';
            card1.disabled = false;
            card2.disabled = false;
            uncoverCards = 0;

        },800);
    }
    }

}