let numUm = Number(prompt("gostaria que você digitasse um número positivo"));

while (numUm < 0) {

    alert("espertinho não é esse tente novamente");

numUm = Number(prompt("gostaria que você digitasse um número positivo"));
}
    alert("agora sim número válido: " + numUm);