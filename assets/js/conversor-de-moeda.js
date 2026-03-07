const listaResultado = document.getElementById("valor-convertido");

const botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click", converterMoeda);

const campoMoeda = document.getElementById("campo-moeda");

const campoReal = document.getElementById("campo-valor-reais");


function converterMoeda() {
    const real = parseInt(campoReal.value);
    

    const moeda = campoMoeda.value;
    
    let valorMoeda = 0;

    if(moeda === "usd"){
        valorMoeda = 0.1907;
    } else if (moeda === "eur"){
        valorMoeda = 0.1641;
    } else if (moeda === "gbp"){
        valorMoeda = 0.1422;
    } else if (moeda === "cad"){
        valorMoeda = 0.2589;
    } else if (moeda === "jpy"){
        valorMoeda = 30.08;
    } else if (moeda === "ars"){
        valorMoeda = 270.75;
    } else if (moeda === "chf"){
        valorMoeda = 0.1481;
    } else if (moeda === "cny"){
        valorMoeda = 1.37;
    }

const  valorConvertido = real * valorMoeda;   


const texto = `
    R$ ${real.toFixed(2)} => $ ${valorConvertido.toFixed(2)} 
`;

    listaResultado.innerHTML = `<li>${texto}</li>`;
}


