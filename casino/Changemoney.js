function ChangeMoney(Result, Bet){
    let Money = parseInt(localStorage.getItem("Money"));

    
    if(Result == "Win"){
        document.getElementById("WOL").textContent = "Win";
        console.log(Money);
        Money = Money + Bet;
        console.log(Money);
    }
    else if(Result == "Lose"){
        
        document.getElementById("WOL").textContent = "Lose";
        Money = Money - Bet;
        
    }
    else if(Result == "ERR"){
        document.getElementById("WOL").textContent = "ERR";
    }
    toString(Money)
    localStorage.setItem("Money", Money);
    
    document.getElementById("Money").textContent = localStorage.getItem("Money")

}