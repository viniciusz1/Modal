let body = document.querySelector('#body');
let tamanhoHeight = window.screen.height;
let tamanhoWidth = window.screen.width;
let quadrado = document.createElement('div');
body.appendChild(quadrado);

let cont = 0


let intervalo = setInterval(function(){
quadrado.style.position = 'relative'
quadrado.style.top = `${cont}px`
quadrado.style.left = `${cont}px`
cont++;

if(cont != tamanhoHeight){
    clearTimeout(intervalo)
    }
}, 0);
