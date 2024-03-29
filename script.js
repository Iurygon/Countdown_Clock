'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const segundos = document.getElementById('Segundos');
const minutos = document.getElementById('Minutos');
const horas = document.getElementById('Horas');
const dias = document.getElementById('Dias');

const atualizar = (tempo) => {
   

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor((tempo / (60 * 60 * 24)));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = qtdDias;
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    
    const contar = () => {
        if (tempo == 0){
            pararContagem();
        }
        atualizar(tempo);
        tempo--    
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    const dataEvento = new Date ('2023-12-31 23:59:59');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());