let card = undefined;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
//player obj
let player = {
  Name: "Nandini",
  Chip: 200
};

//DOM Elements
let errorEl = document.getElementById("err-el");
let messageEl = document.getElementById("message-el");
let cardEL = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chip;

// query selector can be used ,querySelector("#sum-el")

function getRandomNumber() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num === 1) {
    return 11;
  } else if (num > 10) {
    return 10;
  } else {
    return num;
  }
}

function startGame() {
  hasBlackJack=false
  if(player.Chip >=10){
  player.Chip -=10
  refreshObj();
  isAlive = true;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  hideErr();
  } else {
    noMoneyErr()
  }
}

function renderGame() {
  cardEL.textContent = "Cards:";
  for (let i = 0; i < cards.length; i += 1) {
    cardEL.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    //== check if same even if num & string, === is strict in terms of var types
    messageEl.textContent = "Wohoo! You've got Blackjack!!";
    hasBlackJack = true;
    player.Chip +=50
    refreshObj()
  } else {
    messageEl.textContent = "You're out of game!!";
    isAlive = false;
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    card = getRandomNumber();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    errorPara();
  }
}
function refreshObj(){
  playerEl.textContent = player.Name + ": $" + player.Chip
}
function hideErr() {
  errorEl.textContent = "";
}
function errorPara() {
  errorEl.textContent = "You Are Out Of Game! Cannot Draw new Card !!";
}
function noMoneyErr (){
  errorEl.textContent = "You Are Poor!! Get Out!!";

}
