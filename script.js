
let index = 0;
let carouselItems = document.querySelectorAll(".itenscarrossel li");
let temporizador;

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

temporizador = setInterval(goNext, 5000)

function passarAutomatico() {
    temporizador = setInterval(goNext, 5000)
}
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