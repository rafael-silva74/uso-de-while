let saldo = 100; // saldo inicial

while (saldo > 0) {
    let saque = Number(prompt("Saldo: " + saldo + "\nDigite o valor para sacar:"));

    while (saque > saldo) {
        alert("Saldo insuficiente! Tente outro valor.");
        saque = Number(prompt("Saldo: " + saldo + "\nDigite o valor para sacar:"));
    }

    saldo = saldo - saque;
}

alert("Saldo esgotado!");