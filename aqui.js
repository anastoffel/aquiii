let nomeA = "Ana"
let cor = 'Azul'
//console.log(`A cor preferida da ${nomeA} é ${cor}.`)
//console.log("A cor preferida da " + nomeA + " é " + cor)


let frase = 'ana gosta de chocolate.'
let fraseMaiuscula = frase.toUpperCase()
let novaFrase = frase.replaceAll("o", "i")
//console.log(frase.toUpperCase())
//console.log(frase.length)
//console.log(frase.replaceAll("o", "i"))

//const readlineSync = require('readline-sync');

//const numero = readlineSync.question("Escolha a raca pelo numero!");
//const racas = ['Golden', 'Spitz', 'Pincher', 'SRD', 'Labrador']
//const escolha = racas[numero]
//console.log(numero)
//console.log('Raça:' + escolha)



let comidas = ['chocolate', 'morango', 'churrasco']
//console.log(comidas.length)

let sequencia = [1 ,2 ,3 ,4 ,5 ,6 ]
//console.log(sequencia.length)
sequencia.push(7)
//console.log(sequencia)
sequencia.splice(3, 2)
//console.log(sequencia)
//console.log(sequencia.length)




let PB = ['Thomas', 'Arthur', 'Jhon', 'Finn']
function quemSouEu(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length)

    return array[indiceAleatorio]
}
 const PBescolhido = quemSouEu(PB)
    console.log('Voce é:', PBescolhido)