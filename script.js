
let index = 0;
let carouselItems = document.querySelectorAll(".itenscarrossel li");
var temporizador;

function goNext(){
    if(index === carouselItems.length - 1){
        index = 0;
    }else{
        index++;
    }
    carouselItems[index].scrollIntoView({ behavior: "smooth" });
}
function goBack(){
    if(index === 0){
        index = carouselItems.length - 1;
    }else{
        index--;
    }
    carouselItems[index].scrollIntoView({ behavior: "smooth" });
}

function mudarCor() {
    let corBotao = document.getElementsByClassName('botao');
    let Botao = corBotao.length;

    for(var i=0; i<Botao; i++){
        corBotao[i].style.backgroundColor = '#7a7a7a';
    }

}

function voltarCor() {
    let corBotao = document.getElementsByClassName('botao');
    let Botao = corBotao.length;

    for(var i=0; i<Botao; i++){
        corBotao[i].style.backgroundColor = '#fff';
    }
}

function passarAutomatico() { //inicia carrossel
  temporizador = setInterval(goNext, 5000)
}

function pausar(){ //pausa o carrossel
  clearInterval(temporizador);
}

function exibirCard() {
  event.preventDefault();
  pausar();
  var card = document.getElementById("card");
  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");

  if (index === 0) { //verifica index

  if (card.style.display == "block" || card1.style.display == "block") { //verifica display atual
    card.style.display = "none";
    card1.style.display = "none";
    
  } else {
    card.style.display = "block";
    card1.style.display = "block";
  }
  };

  if (index === 1){
  
  if (card.style.display == "block" || card2.style.display == "block") {
    card.style.display = "none";
    card2.style.display = "none";
    
  } else {
    card.style.display = "block";
    card2.style.display = "block";
  }
}

}

function fecharCard() {
  event.preventDefault();
  var card = document.getElementById("card");
  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");

  if (index == 0) { //verifica index

  if (card.style.display == "block" || card1.style.display == "block") { //verifica display atual
    card.style.display = "none";
    card1.style.display = "none";
  } else {
    card.style.display = "block";
    card1.style.display = "block";
  }
  };

  if (index == 1){
  
  if (card2.style.display === "block") {
    card.style.display = "none";
    card2.style.display = "none";

  } else {
    card.style.display = "none";
    card2.style.display = "block";
  }
}
passarAutomatico();
}

temporizador = setInterval(goNext, 5000);


/*
console.log("final");

let index = 0;
let carouselItems = document.querySelectorAll(".carousel-item");

function goNext() {
  if (index === carouselItems.length - 1) {
    index = 0;
  } else {
    index++;
  }

  carouselItems[index].scrollIntoView({ behavior: "smooth" });
}

function goBack() {
  if (index === 0) {
    index = carouselItems.length - 1;
  } else {
    index--;
  }

  carouselItems[index].scrollIntoView({ behavior: "smooth" });
} */