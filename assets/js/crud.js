// Pega o elemento do HTML que possui o id "botao-cadastrar"
// e guarda esse elemento dentro da variável botaoCadastrar
const botaoCadastrar = document.getElementById("botao-cadastrar");

// Adiciona um "ouvinte de evento" ao botão.
// Quando o botão for clicado, a função cadastrarJogo será executada.
botaoCadastrar.addEventListener("click", cadastrarJogo);

// Pega o campo de input do HTML que possui o id "campo-nome"
const campoNome = document.getElementById("campo-nome");

// Adicionar um "ouvinte de evento" ao campo
//Quando ocorrer o evento do teclado pressionado
campoNome.addEventListener("keydown", eventoEnterCampoNome);

// Função que será executada quando ocorrer um evento de teclado no campo de nome
function eventoEnterCampoNome(event) {

    // Verifica qual tecla foi pressionada pelo usuário
    // Se a tecla pressionada do "Enter"
    if(event.key === "Enter") {

        //Chama a função cadastrarJogo()
        //Isso faz com que o jogo seja adicionado à lista
        cadastrarJogo();
    }
}

// Função responsável por cadastrar (adicionar) um jogo na lista
function cadastrarJogo(){
    // Pega o valor digitado dentro do input
    const nome = campoNome.value.trim();

    // Verifica se o nome digitado contem menos que 2 caracteres
    if(nome.length < 2){
        // Apresenta uma mensagem que contém menos de 2 caracteres
        alert("Nome deve conter no mínimo 2 caracter");
        // Encerra a execução deste método, pois o não deve cadastrar quando o nome é inválido
        return;
    }

    // Cria um novo elemento <li> (item de lista) no HTML
    // Exemplo: <li></li>
    const tagLi = document.createElement("li");

    // Coloca dentro do <li> o nome que foi digitado no campo
    // Exemplo: <li>Mario</li>
    tagLi.innerHTML = nome;

    // Pega a lista não ordenada (UL) do HTML que possui o id "jogos"
    // Exemplo de estrutura: <ul id="jogos"></ul>
    const tagUl = document.getElementById("jogos");

    // Adiciona o novo <li> criado dentro da <ul>
    // Ou seja, adiciona um novo item na lista de jogos
    tagUl.appendChild(tagLi);

    // Limpar campo nome
    campoNome.value = "";

    // Foco no campo do nome
    campoNome.focus();
}