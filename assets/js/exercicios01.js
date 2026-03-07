const radios = document.getElementsByName("tipo");

function esconderTodos() {
    const boxes = document.getElementsByClassName("box-tipo");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }
}

function mostrarTipo(event) {
    esconderTodos();

    const tipoSelecionado = event.target.value;

    const divMostrar = document.getElementById(`tipo-${tipoSelecionado}`);

    divMostrar.style.display = "block";
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", mostrarTipo);
} 

