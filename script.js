function agregarTarea() {
    const tareaNombre = document.getElementById("tareaNombre").value;
    const esImportante = document.querySelector('input[name="importante"]:checked');

    if (tareaNombre.trim() === "") {
        return alert("Escribe una descripción para la tarea");
    }

    if (!esImportante) {
        return alert("Debes seleccionar si la tarea es importante o no.");
    }

    const tareaDiv = document.createElement("div");
    tareaDiv.classList.add("tarea");
    if (esImportante.value === "true") {
        tareaDiv.classList.add("importante");
        document.getElementById("importantes").appendChild(tareaDiv);
    } else {
        document.getElementById("noImportantes").appendChild(tareaDiv);
    }

    const textoTarea = document.createElement("span");
    textoTarea.classList.add("textoTarea");
    textoTarea.textContent = tareaNombre;

    const checkboxRealizada = document.createElement("input");
    checkboxRealizada.type = "checkbox";
    checkboxRealizada.onchange = () => {
        textoTarea.classList.toggle("realizada", checkboxRealizada.checked);
    };

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
        tareaDiv.remove();
    };

    tareaDiv.appendChild(checkboxRealizada);
    tareaDiv.appendChild(textoTarea);
    tareaDiv.appendChild(btnEliminar);

    document.getElementById("tareaNombre").value = "";
    document.getElementById("esImportante").checked = false;
    document.getElementById("noEsImportante").checked = false;
}
