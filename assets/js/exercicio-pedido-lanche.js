// 1️⃣ Pegando o botão pelo ID
const botao = document.getElementById("btnMontar");

// 2️⃣ Adicionando evento de clique
botao.addEventListener("click", function () {

    // ===== PEGANDO O NOME =====
    const nomeInput = document.getElementById("nomeCliente");
    const nome = nomeInput.value.trim(); // remove espaços extras

    if (nome === "") {
        alert("Digite seu nome!");
        return; // para a execução
    }

    // ===== PEGANDO O TIPO DE PÃO (RADIO) =====
    const radios = document.getElementsByName("tipoPao");
    let paoSelecionado = "";

    // Percorrendo todos os radios
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            paoSelecionado = radios[i].value;
        }
    }

    if (paoSelecionado === "") {
        alert("Selecione um tipo de pão!");
        return;
    }

    // ===== PEGANDO OS INGREDIENTES (CHECKBOX) =====
    const ingredientes = document.getElementsByClassName("ingrediente");
    let listaIngredientes = [];

    // Percorrendo todos os checkboxes
    for (let i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            listaIngredientes.push(ingredientes[i].value);
        }
    }

    if (listaIngredientes.length === 0) {
        alert("Selecione pelo menos um ingrediente!");
        return;
    }

    // ===== MOSTRANDO RESULTADO =====
    const divResultado = document.getElementById("resultado");

    // Limpando resultado anterior
    divResultado.innerHTML = "";

    // Criando elementos dinamicamente (sem montar string gigante)
    const titulo = document.createElement("h3");
    titulo.textContent = "Pedido Montado";

    const cliente = document.createElement("p");
    cliente.textContent = "Cliente: " + nome;

    const pao = document.createElement("p");
    pao.textContent = "Pão: " + paoSelecionado;

    const lista = document.createElement("ul");

    // Criando um <li> para cada ingrediente
    for (let i = 0; i < listaIngredientes.length; i++) {
        const item = document.createElement("li");
        item.textContent = listaIngredientes[i];
        lista.appendChild(item);
    }

    // Adicionando tudo dentro da div
    divResultado.appendChild(titulo);
    divResultado.appendChild(cliente);
    divResultado.appendChild(pao);
    divResultado.appendChild(lista);

    // ===== DESAFIO EXTRA: LIMPAR CAMPOS =====

    // Limpar nome
    nomeInput.value = "";

    // Desmarcar radios
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    // Desmarcar checkboxes
    for (let i = 0; i < ingredientes.length; i++) {
        ingredientes[i].checked = false;
    }

});