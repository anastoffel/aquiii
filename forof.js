/*const numeros = [14, 67, 89, 15, 23]

for (let numero of numeros) {
    console.log(numero)
}*/

const arrayDePalavras = ['Oi', 'sumido', 'tudo', 'bem?', 'Saudades.']
let mensagem = ' '

function imprimirMensagem(arrayDePalavras) {
for (let palavra of arrayDePalavras) {
    mensagem += palavra + ' ';
}
 console.log(mensagem);
}
imprimirMensagem(arrayDePalavras)