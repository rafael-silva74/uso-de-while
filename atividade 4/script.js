let nome = prompt("Digite seu primeiro nome:");
let sobrenome = prompt("Digite seu sobrenome:");

while (nome === "" || sobrenome === "") {
    alert("Nome e sobrenome são obrigatórios!");

    nome = prompt("Digite seu primeiro nome:");
    sobrenome = prompt("Digite seu sobrenome:");
}

alert("Nome completo: " + nome + " " + sobrenome);