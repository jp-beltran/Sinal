var red = document.getElementById("vermelho");
var yellow = document.getElementById("amarelo");
var green = document.getElementById('verde');

indice = 0;

function changeColor(){
    red.style.backgroundColor = "black";
    yellow.style.backgroundColor = "black";
    green.style.backgroundColor = "black";

    if(indice === 0){
        red.style.backgroundColor = "red";
    }else if(indice === 1){
        yellow.style.backgroundColor = "green";
    }else if(indice === 2){
        green.style.backgroundColor = "yellow";
    }

    indice = (indice + 1) % 3;

}

let intervalId = setInterval(changeColor, 1500);

