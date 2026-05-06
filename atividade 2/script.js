let soma = 0;
let contador = 0;

let nota = Number(prompt("Digite uma nota (negativo para sair):"));

while (nota >= 0) {
    soma = soma + nota;
    contador = contador + 1;

    nota = Number(prompt("Digite outra nota (negativo para sair):"));
}

if (contador > 0) {
    let media = soma / contador;
    alert("Média das notas: " + media);
} else {
    alert("Nenhuma nota válida foi digitada.");
}