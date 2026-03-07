const botaoAgendarConsulta = document.getElementById("agendar-consulta");
botaoAgendarConsulta.addEventListener("click", agendarConsulta);

function agendarConsulta() {
    let campoNomePet = document.getElementById("nome-pet");
    let campoDataConsulta = document.getElementById("data-consulta");
    let campoTipoAnimal = document.getElementById("tipo-animal")
    let campoIdadeAnimal = document.getElementById("idade-animal")
    
    let nomePet = campoNomePet.value;
    let dataConsulta = campoDataConsulta.value;
    let tipoAnimal = campoTipoAnimal.value;
    let idadeAnimal = campoIdadeAnimal.value;
   
    alert("Nome do Pet: " +nomePet + 
        "\nData da consulta: " + dataConsulta +
        "\nTipo de animal: " + tipoAnimal +
        "\nIdade animal: " + idadeAnimal
        );
}