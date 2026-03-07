let proximoId = 1;

const botaoCadastrarImovel = document.getElementById("cadastrar");
botaoCadastrarImovel.addEventListener("click", cadastrarImovel);

const campoLocalidade = document.getElementById("localidade");
const campoProprietario = document.getElementById("proprietario");
const campoValorImovel = document.getElementById("valor-imovel");
const campoMetroQuadrado = document.getElementById("quantidade-metro-quadrado");
const campoSelect = document.getElementById("possui");
const tbody = document.getElementById("tabela-imoveis")




function cadastrarImovel() {
    const local = campoLocalidade.value.trim();
    const dono = campoProprietario.value.trim();
    const valor = parseFloat(campoValorImovel.value.trim());
    const metro = parseInt(campoMetroQuadrado.value.trim());
    const construcao = campoSelect.value;
    const precoM2 = calcularM2(valor, metro)

    if (proprietario === "") {
        alert("Informe o proprietario.");
        return;
    }

    if (local === "") {
        alert("Informe a localidade.");
        return;
    }

    if (construcao === "") {
        alert("Construção deve ser selecionado");
        return;
    }

    if (valor <= 0 || Number.isNaN(valor)) {
        alert("Informe um valor de imovel valido.");
        return;
    }

    if (metro <= 0 || Number.isNaN(metro)) {
        alert("Informe uma quantidade de m2 valida.");
        return;
    }


    criarLinha(local, dono, valor, metro, construcao, precoM2, proximoId);
    proximoId += 1;

    limparCampo();
}

function calcularM2(valor, metro) {

    const precoM2 = valor / metro;
    return precoM2;

}



function criarLinha(local, dono, valor, metro, construcao, precoM2, id) {
    const linha = `<tr>
            <td>${id}</td>
            <td>${local}</td>
            <td>${dono}</td>
            <td>$ ${valor.toFixed(2)}</td>
            <td>$ ${precoM2.toFixed(2)}</td>
            <td>${metro}</td>
            <td>${construcao}</td>
        </tr>`;

    tbody.innerHTML = tbody.innerHTML + linha;

}

function obterSimOuNao(construcao) {
    if (construcao === "Sim") {
        return "Sim";
    } else if (construcao === "Nao") {
        return "Nao";
    }
}

function limparCampo() {
    campoLocalidade.value = "";
    campoProprietario.value = "";
    campoValorImovel.value = "";
    campoMetroQuadrado.value = "";
    campoSelect.value = "";

    indexParaEditar = -1;

}