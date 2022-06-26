let newGameHandler = document.querySelector(".btn--new");
let rollHandler = document.querySelector(".btn--roll");
let holdHandler = document.querySelector(".btn--hold");
let player = {
    scorePlayer1: 0,
    scorePlayer2: 0,
    current: 0,
    turn: true,
    winPlayer1: false,
    winPlayer2: false
}

const newGame = () => {
    player.winPlayer1 ? (document.querySelector(".player--0").classList.remove("player--winner"), player.winPlayer1 = false): player.winPlayer2 ? (document.querySelector(".player--1").classList.remove("player--winner"), player.winPlayer2 = false ): null;
    document.querySelector(".player--0").classList.add("player--active");
    document.getElementById("current--0").innerHTML = "0";
    document.getElementById("current--1").innerHTML = "0";
    document.getElementById("score--1").innerHTML = "0";
    document.getElementById("score--0").innerHTML = "0";
    changeStateButtons()
    player.scorePlayer1 = 0;
    player.scorePlayer2 = 0;
    player.turn = true;
    player.current = 0;
}

const rollDice = () => {
    let dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.querySelector(".dice").src = `dice-${dice}.png`;
    if (dice === 1){
        player.turn ? (
            document.getElementById("current--0").innerHTML = 0, 
            document.querySelector(".player--0").classList.remove("player--active")
        ) : (
            document.getElementById("current--1").innerHTML = 0,
            document.querySelector(".player--1").classList.remove("player--active")
            );
        player.turn = !player.turn;
        player.current = 0;
    } else {
        player.current += dice;
        player.turn ? (
            document.getElementById("current--0").innerHTML = player.current,
            document.querySelector(".player--0").classList.add("player--active")
        ) : (
            document.getElementById("current--1").innerHTML = player.current,
            document.querySelector(".player--1").classList.add("player--active")
            );
    }
}

const changeStateButtons = () => {
    if(document.querySelector(".btn--roll").classList.contains("hidden") && document.querySelector(".btn--roll").classList.contains("hidden")){
        document.querySelector(".btn--roll").classList.remove("hidden");
        document.querySelector(".btn--hold").classList.remove("hidden");
    } else {
        document.querySelector(".btn--roll").classList.add("hidden");
        document.querySelector(".btn--hold").classList.add("hidden");
    }
}

const hold = () => {
    player.turn ? (
        player.scorePlayer1 += player.current,
        document.getElementById("score--0").innerHTML = player.scorePlayer1,
        document.getElementById("current--0").innerHTML = 0,
        document.querySelector(".player--0").classList.remove("player--active"),
        player.current = 0,
        player.turn = !player.turn
        ) : (
            player.scorePlayer2 += player.current,
            document.getElementById("score--1").innerHTML = player.scorePlayer2,
            document.getElementById("current--1").innerHTML = 0,
            document.querySelector(".player--1").classList.remove("player--active"),
            player.current = 0,
            player.turn = !player.turn
        ); 
    
    player.scorePlayer1 >= 100 ? (
        document.querySelector(".player--0").classList.add("player--winner"), 
        player.winPlayer1 = true,
        changeStateButtons()
        ) : player.scorePlayer2 >= 100 ? (
            document.querySelector(".player--1").classList.add("player--winner"), 
            player.winPlayer2 = true,
            changeStateButtons()
            ): null;
}

newGameHandler.addEventListener("click", newGame);
rollHandler.addEventListener("click", rollDice);
holdHandler.addEventListener("click", hold);