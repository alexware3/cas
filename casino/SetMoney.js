if(localStorage.getItem("Money")){
    document.getElementById("Money").textContent = localStorage.getItem("Money");
}
else if(localStorage.getItem("Money") == false){
    localStorage.setItem("Money","1000");
    document.getElementById("Money").textContent = localStorage.getItem("Money");
}



