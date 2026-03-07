const botaoLimparCampos = document.getElementById("limpar-campos");
botaoLimparCampos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processar");
botaoProcessar.addEventListener("click", processarPedido);
 
const botaoCalcularSoma = document.getElementById("calcular-soma");
botaoCalcularSoma.addEventListener("click", somar);


const botaoCalcularMedia = document.getElementById("calcular-media");
botaoCalcularMedia.addEventListener("click", media);

function limparCampos() {
    let campoPlacaMae = document.getElementById("placa-mae");
    console.log(campoPlacaMae);
    
    let campoPLacaVideo = document.getElementById("placa-video");
    console.log(campoPLacaVideo);

    campoPlacaMae.value = "";
    campoPLacaVideo.value = "";
}

function processarPedido() {
    let campoPlacaMae = document.getElementById("placa-mae");
    let campoPLacaVideo = document.getElementById("placa-video");

    let placaMae = campoPlacaMae.value;
    let placaVideo = campoPLacaVideo.value;

    alert(placaMae + " " + placaVideo);
}

function somar() {
    let campoNumero01 = document.getElementById("numero01");
    console.log(campoNumero01);
    let campoNumero02 = document.getElementById("numero02");
    console.log(campoNumero02);

    let numero01 = parseInt(campoNumero01.value);
    let numero02 = parseInt(campoNumero02.value);

    let soma = numero01 + numero02;

    alert("Soma: " + soma);
}

function media() {
    debugger
    let campoNome = document.getElementById("nome");
    let campoNota1 = document.getElementById("nota1");
    let campoNota2 = document.getElementById("nota2");
    let campoNota3 = document.getElementById("nota3");

    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    let nota3 = parseFloat(campoNota3.value);

    let media = (nota1 + nota2 + nota3) / 3;

    let status = "";
    if (media < 7) {
        status = "Reprovado";
    } else {
        status = "Aprovado";
    }

    const texto = `Aluno: ${nome}<br>
    Nota 1: ${nota1.toFixed(2).replace(".", ",")}<br>
    Nota 1: ${nota2.toFixed(2).replace(".", ",")}<br>
    Nota 1: ${nota3.toFixed(2).replace(".", ",")}<br>
    Média: ${media.toFixed(2).replace(".", ",")}<br>
    Status: ${status}`;

    const divResultadoMedia = document.getElementById("resultado-media");
    divResultadoMedia.innerHTML = texto;
}