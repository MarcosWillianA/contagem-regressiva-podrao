const contagemRegressiva = document.querySelector('#contagem-regressiva');
const relogio = document.querySelectorAll('.relogio');
const DIAS = document.querySelector('#dias');
const HORAS = document.querySelector('#horas');
const MINUTOS = document.querySelector('#minutos');
const SEGUNDOS = document.querySelector('#segundos');
const podeComer = document.querySelector('h3');

const dataFinal = new Date('2024-11-08T18:00:00');

const contagem_regressiva = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataFinal - agora;

    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    DIAS.innerText = dias;
    HORAS.innerText = horas;
    MINUTOS.innerText = minutos;
    SEGUNDOS.innerText = segundos;
    
    if (distancia < 0) {
        clearInterval(contagem_regressiva);
        podeComer.style.display = 'block';
    }
}, 1000) 