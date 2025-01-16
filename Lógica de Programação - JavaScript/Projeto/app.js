alert("Boas vindas ao jogo do número secreto!");
const numeroSecreto = 6;
console.log(numeroSecreto)
const escolhaDoUsuario = prompt("Escolha um número entre 1 e 10");

if (numeroSecreto == escolhaDoUsuario) {
    alert(`Você acertou! O número é ${numeroSecreto} :D`);
} else {
    alert("Você errou o número secreto :(")
}