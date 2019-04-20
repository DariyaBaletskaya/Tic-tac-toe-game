let blocks = new Array(9);
let winner = "error";
let timeTotal = 0,
    timeTurn = 0;
let runningTotal = 0,
    runningTurn = 0;
let clockTotal = document.getElementById("game-duration");
let clockTurn = document.getElementById("turn-duration");

setTimeout(stopWatchGame,100);
setTimeout(stopWatchTurn,1);
function stopWatchGame(){
    if(runningTotal == 0) {
        runningTotal = 1;
        incrementTotal();
    }else{
        runningTotal = 0;
    }
}

function incrementTotal() {
    if(runningTotal == 1) {
        setTimeout(() => {
            timeTotal++;
            let mins = Math.floor(timeTotal/10/60);
            let sec = Math.floor(timeTotal/10%60);

            if(mins < 10){ mins = '0' + mins;}
            if(sec  <  10){ sec = '0' + sec;}

    let clockString = mins + ' : ' + sec;
        clockTotal.textContent = clockString;
        incrementTotal();
        }, 100);
    }
}
function stopWatchTurn(){
    if(runningTurn == 0) {
        runningTurn = 1;
        incrementTurn();
    } else {
        runningTurn = 0;
    }
}

function incrementTurn() {
    if(runningTurn == 1) {
        setTimeout(() => {
            timeTurn++;
            let mins = Math.floor(timeTurn/10/60);
            let sec = Math.floor(timeTurn/10%60);

            if(mins < 10){ mins = '0' + mins;}
            if(sec  <  10){ sec = '0' + sec;}

       let clockString = mins + ' : ' + sec;
        clockTurn.textContent = clockString;
        incrementTurn();
        }, 100);
    } else {
        timeTurn = 0;
        clockTurn.textContent = '00 : 00';
    }
}

function reset() {
    running = 0;
    clock.textContent = '00 : 00';
}

function playGame() {
    let id = Math.floor(Math.random()*9);
    blocks[id] ? playGame() : move(id, 'computer');
}

function move(id, role) {
    stopWatchTurn();
    if(blocks[id]){
       return false;
    }

    blocks[id] = role;
    document.getElementById(id).className = 'block ' + role;
    !checkEnd() ? (role == 'player') ? setTimeout(playGame, 1000) : null : setTimeout(reset, 500);
}

function reset() {
    alert("Игра окончена. Победитель: " + winner);
    location.reload();
}

function checkEnd() {

    if (blocks[0] == 'computer' && blocks[1] == 'computer' && blocks[2] == 'computer' 
        || blocks[3] == 'computer' && blocks[4] == 'computer' && blocks[5] == 'computer'
        || blocks[6] == 'computer' && blocks[7] == 'computer' && blocks[8] == 'computer' 
        || blocks[0] == 'computer' && blocks[3] == 'computer' && blocks[6] == 'computer' 
        || blocks[1] == 'computer' && blocks[4] == 'computer' && blocks[7] == 'computer' 
        || blocks[2] == 'computer' && blocks[5] == 'computer' && blocks[8] == 'computer' 
        || blocks[0] == 'computer' && blocks[4] == 'computer' && blocks[8] == 'computer' 
        || blocks[2] == 'computer' && blocks[4] == 'computer' && blocks[6] == 'computer')
        {
            winner = 'Компьютер';
            return true;
        }
  


    if ( blocks[0] == 'player' && blocks[1] == 'player' && blocks[2] == 'player'
        || blocks[3] == 'player' && blocks[4] == 'player' && blocks[5] == 'player'
        || blocks[6] == 'player' && blocks[7] == 'player' && blocks[8] == 'player'
        || blocks[0] == 'player' && blocks[3] == 'player' && blocks[6] == 'player'
        || blocks[1] == 'player' && blocks[4] == 'player' && blocks[7] == 'player'
        || blocks[2] == 'player' && blocks[5] == 'player' && blocks[8] == 'player'
        || blocks[0] == 'player' && blocks[4] == 'player' && blocks[8] == 'player'
        || blocks[2] == 'player' && blocks[4] == 'player' && blocks[6] == 'player') {
            winner = 'Игрок';
            return true;
        }

    if(blocks[0] && blocks[1] && blocks[2] && blocks[3] && blocks[4] && blocks[5] && blocks[6] && blocks[7] && blocks[8]) {
        winner = 'Ничья';
        return true;
    }
}