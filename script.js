
let index = 0;
let carouselItems = document.querySelectorAll(".itenscarrossel li");
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

/* function passar(increase) {
    console.log(index);
    index = index + increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth" });
}

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