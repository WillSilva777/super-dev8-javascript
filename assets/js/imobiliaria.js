let proximoCodigo = 1;

const campoProprietario = document.getElementById("campo-proprietario");
const campoLocalidade = document.getElementById("campo-localidade");
const campoValorImovel = document.getElementById("campo-valor-imovel");
const campoM2 = document.getElementById("campo-m2");
const campoConstrucao = document.getElementById("campo-construcao");
const tabelaImoveis = document.getElementById("tabela-imoveis");
const botaoSalvar = document.getElementById("botao-salvar");

botaoSalvar.addEventListener("click", salvar);

function salvar() {
    const proprietario = campoProprietario.value.trim();
    const localidade = campoLocalidade.value.trim();
    const valorImovel = Number(campoValorImovel.value);
    const quantidadeM2 = Number(campoM2.value);
    const possuiConstrucao = campoConstrucao.checked ? "Sim" : "Nao";

    if (proprietario === "") {
        alert("Informe o proprietario.");
        return;
    }

    if (localidade === "") {
        alert("Informe a localidade.");
        return;
    }

    if (valorImovel <= 0 || Number.isNaN(valorImovel)) {
        alert("Informe um valor de imovel valido.");
        return;
    }

    if (quantidadeM2 <= 0 || Number.isNaN(quantidadeM2)) {
        alert("Informe uma quantidade de m2 valida.");
        return;
    }

    const valorM2 = valorImovel / quantidadeM2;

    const linha = `<tr>
        <td>${proximoCodigo}</td>
        <td>${proprietario}</td>
        <td>${localidade}</td>
        <td>R$ ${valorImovel.toFixed(2)}</td>
        <td>${quantidadeM2.toFixed(2)}</td>
        <td>R$ ${valorM2.toFixed(2)}</td>
        <td>${possuiConstrucao}</td>
    </tr>`;

    tabelaImoveis.insertAdjacentHTML("beforeend", linha);
    proximoCodigo += 1;
    limparCampos();
}

function limparCampos() {
    campoProprietario.value = "";
    campoLocalidade.value = "";
    campoValorImovel.value = "";
    campoM2.value = "";
    campoConstrucao.checked = false;
}
