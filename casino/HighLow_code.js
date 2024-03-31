document.getElementById("Money").textContent = localStorage.getItem("Money")
let Result;
function Play_HighLow(){
    
    let Player_Card = toString(Deck());
    localStorage.setItem("Player_Card", Player_Card);
    document.getElementById("Player_Card").textContent = Player_Card;
    
}

function Higher(){
    let Player_Card = localStorage.getItem("Player_Card");
    let New_Card = Deck();
    let Result;

    if(Player_Card < New_Card){
        Result = "Win";
    }
    else if(Player_Card > New_Card){
        Result = "Lose";
    }
    else{
        Result = "Push"
    }
}

function Lower(){
    Player_Card = Player_Card.textContent;
    let New_Card = Deck();
    let Result;

    if(Player_Card > New_Card){
        Result = "Win";
    }
    else if(Player_Card < New_Card){
        Result = "Lose";
    }
    else{
        Result = "Push"
    }
}

function Pullout(){

}

function Deck(){
    let Cards = [1,2,3,4,5,6,7,8,9,10,10,10,10]
    let Cards_Index = Math.floor(Math.random(0) * 12)
    let Card = Cards[Cards_Index]
    return Card
}