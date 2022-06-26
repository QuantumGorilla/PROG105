let newGameHandler = document.querySelector(".btn--new");
let rollHandler = document.querySelector(".btn--roll");
let holdHandler = document.querySelector(".btn--hold");
let player = {
    scorePlayer1: 0,
    scorePlayer2: 0,
    current: 0,
    turn: true
}

const newGame = () => {
    document.getElementById("current--0").innerHTML = "0";
    document.getElementById("current--1").innerHTML = "0";
    document.getElementById("score--1").innerHTML = "0";
    document.getElementById("score--0").innerHTML = "0";
    player.scorePlayer1 = 0;
    player.scorePlayer2 = 0;
    player.current = 0;
}

const rollDice = () => {
    let dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("dice").src = `dice-${dice}.png`;
    if (dice === 1){
        (player.turn ? document.getElementById("current--0").innerHTML = 0 : document.getElementById("current--1").innerHTML = 0);
        player.turn = !player.turn;
        player.current = 0;
    } else {
        player.current += dice;
        (player.turn ? document.getElementById("current--0").innerHTML = player.current : document.getElementById("current--1").innerHTML = player.current);
    }
}

const hold = () => {
    player.turn ? (
        player.scorePlayer1 += player.current,
        document.getElementById("score--0").innerHTML = player.scorePlayer1,
        document.getElementById("current--0").innerHTML = 0,
        player.current = 0,
        player.turn = !player.turn
        ) : (
            player.scorePlayer2 += player.current,
            document.getElementById("score--1").innerHTML = player.scorePlayer2,
            document.getElementById("current--1").innerHTML = 0,
            player.current = 0,
            player.turn = !player.turn
        ); 
    
    player.scorePlayer1 >= 100 ? alert("¡Gano el player 1!") : player.scorePlayer2 >= 100 ? alert("¡Gano el player 2!") : null;
}

newGameHandler.addEventListener("click", newGame);
rollHandler.addEventListener("click", rollDice);
holdHandler.addEventListener("click", hold);