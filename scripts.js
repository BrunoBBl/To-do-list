function adicionarTarefa() {
    let Tarefa = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = Tarefa + '<span onclick="deletarTarefa(this)">❌</span>'
    
    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove()
}  

// código com função de deletar tarefa