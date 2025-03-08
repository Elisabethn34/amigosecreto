//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo"); // Corrigido para corresponder ao HTML
    const nome = inputNome.value.trim(); // Captura o valor e remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe alerta se o campo estiver vazio
    } else {
        amigos.push(nome); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista na interface
        console.log(amigos); // Exibe o array atualizado no console
        inputNome.value = ""; // Limpa o campo de entrada
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); // Corrigido para corresponder ao HTML
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os novos elementos
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado"); // Corrigido para corresponder ao HTML
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sorteio.";
    } else {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `Amigo sorteado: ${amigos[indiceSorteado]}`;
    }
}