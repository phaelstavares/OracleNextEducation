alert("Boas vindas ao jogo do número secreto!");
const numeroSecreto = 6;
console.log(numeroSecreto);
let escolhaDoUsuario;
let tentativas = 1;

// enquanto a escolha não for igual ao número secreto
while (escolhaDoUsuario != numeroSecreto) {
    escolhaDoUsuario = prompt("Escolha um número entre 1 e 10");

    // se a escolha for igual ao número secreto
    if (numeroSecreto == escolhaDoUsuario) {
        break;
    } else {
        if (numeroSecreto > escolhaDoUsuario) {
            alert(`O número secreto é maior que ${escolhaDoUsuario}`);
        } else {
            alert(`O número secreto é menor que ${escolhaDoUsuario}`);
        }

        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou! O número é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);