let proximoId = 1;

const botaoCadastrarVeiculo = document.getElementById("botao-salvar");
botaoCadastrarVeiculo.addEventListener("click", cadastrarVeiculo);

const campoMarcaVeiculo = document.getElementById("marca-veiculo");
const campoModeloVeiculo = document.getElementById("modelo-veiculo");
const campoAnoVeiculo = document.getElementById("ano-veiculo");
const campoValorVeiculo = document.getElementById("valor-veiculo");
const campoPortasVeiculo = document.getElementById("quantidade-portas");
const tbody = document.getElementById("veiculos-tabela");

function cadastrarVeiculo() {
    const marca = campoMarcaVeiculo.value.trim();
    const modelo = campoModeloVeiculo.value.trim();
    const ano = parseInt(campoAnoVeiculo.value.trim());
    const valor = parseFloat(campoValorVeiculo.value.trim());
    const quantidadePortas = parseInt(campoPortasVeiculo.value.trim());
    const idade = calcularIdade(ano);

if (marca === "") {
    alert("Informe a marca.");
    return;
}

if (modelo === "") {
    alert("Informe o modelo.");
    return;
}

if (isNaN(ano) || ano <= 0) {
    alert("Informe um ano válido.");
    return;
}

if (isNaN(valor) || valor <= 0) {
    alert("Informe um valor válido.");
    return;
}

if (isNaN(quantidadePortas) || quantidadePortas <= 0) {
    alert("Informe a quantidade correta de portas.");
    return;
}

    criarLinha(marca, modelo, ano, valor, quantidadePortas, idade, proximoId);
    proximoId += 1;

    limparCampo();
}

function criarLinha(marca, modelo, ano, valor, quantidadePortas, idade, id) {
    const linha = `<tr>
        <td>${id}</td>
        <td>${marca}</td>
        <td>${modelo}</td>
        <td>${ano}</td>
        <td>${valor}</td>
        <td>${quantidadePortas}</td>
        <td>${idade}</td>
      </tr>`

      tbody.innerHTML += linha;
}

function calcularIdade(ano) {
    const idade = 2026 - ano;
    return idade;
}

function limparCampo() {
    campoAnoVeiculo.value = "";
    campoMarcaVeiculo.value = "";
    campoModeloVeiculo.value = "";
    campoPortasVeiculo.value = "";
    campoValorVeiculo.value = "";
}