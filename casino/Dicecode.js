document.getElementById("Money").textContent = localStorage.getItem("Money");

function Dice_Game_Run(){
    
    let Dice = Math.floor(Math.random() * 6 + 1);
    document.getElementById("Result").textContent = Dice;
    let Money = parseInt(localStorage.getItem("Money"));
    let Guess = document.getElementById("Guess").value;
    let Bet = parseInt(document.getElementById("Bet").value);
    let Result
    if(Bet <= Money && Bet>=0){
        if(Guess == Dice){
         Result = "Win"
         Bet = Bet * 6
        }
    
        else{
            Result = "Lose"
        }
    }
    else{
        Result = "ERR"
    }
    
       
    
    ChangeMoney(Result, Bet);
    
};