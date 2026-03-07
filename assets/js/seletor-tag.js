// Busca no HTML todos os elementos que tenham o atributo name="fonte" (ex.: radios/inputs de tamanho de fonte)
let inputsTamanhoFonte = document.getElementsByName("fonte");

// Percorre a lista de inputs encontrados (do primeiro ao último)
for (let i = 0; i < inputsTamanhoFonte.length; i += 1) {
    // Pega o input da posição atual (índice i) dentro da lista
    const inputTamanhoFonte = inputsTamanhoFonte[i];
    // Define que, quando esse input mudar de valor, a função campoFonteAlterado será executada
    inputTamanhoFonte.onchange = campoFonteAlterado;

}

// Função chamada automaticamente quando algum input de fonte mudar (evento "change")
function campoFonteAlterado(event) {
    // Pega o valor do input que disparou o evento (por exemplo: "12", "16", "20" etc.)
    let tamanho = event.target.value;
    // Chama a função responsável por aplicar o tamanho da fonte no parágrafo
    alterarTamanhoFonte(tamanho);
}

// Função qye realmente altera o tamanho da fonte do primeiro <p> da página
function alterarTamanhoFonte(tamanho) {
    //Busca todas as tags <p> e pega a primeira delas (índice 0)
    const tagP = document.getElementsByTagName("p")[0];

    // Define o font-size do parágrafo usando template string e adicionando "px" ao valor do tamanho
    tagP.style.fontSize = `${tamanho}px`;
}

// Seleciona o elemento de input/select responsável pela cor do texto
const corTexto = document.getElementById("cor-texto");
// Adiciona um listener para detectar quando o valor do input/select mudar
corTexto.addEventListener("change", definirCorTexto);
// Seleciona o primeiro parágrafo da página
const tagP = document.getElementsByTagName("p")[0];

//Função que será chamada quando a cor for alterada
function definirCorTexto(event) {
    // Obtém o elemento que diparou o evento (o select de cores)
    let campoSelect = event.target;

    // Pega o valor selecionado (a cor escolhida)
    let cor = campoSelect.value;

    // Aplica a cor selecionada ao estilo do primeiro parágrafo
    tagP.style.color = cor;
}

// Seleciona o elemento de input/select responsável pela cor de fundo
const tagCorFundo = document.getElementById("cor-fundo");

// Adiciona um listener para detectar quando o valor do input/select mudar
tagCorFundo.addEventListener("change",definirCorFundo);

// Função que será chamada quando a cor de fundo for alterada
function definirCorFundo() {
    // Pega o valor selecionado (a cor escolhida)
    const corFundo = tagCorFundo.value;

    // Selecione o elemento <body> da página
    const body = document.getElementsByTagName("body")[0];

    // Aplica a cor escolhida ao fundo da página (backgroundColor)
    body.style.backgroundColor = corFundo;
}

const imagens = [
    "assets/imagens/01.webp",
    "assets/imagens/02.jpg",
    "assets/imagens/03.webp"
];

const imagem = document.getElementById("imagem-mine");
let indice = 0;
setInterval(() => {
    let imagemSrc = imagens[indice];
    imagem.setAttribute("src", imagemSrc);

    indice = indice + 1;
    if(indice >= 3) {
        indice = 0;
    }    
}, 1000);