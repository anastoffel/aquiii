let carrinho = []

const fruta1 = {
	nome: "Melao", 
    disponibilidade: true
}
 
const fruta2 = {
	nome: "Melancia", 
    disponibilidade: true
}

const fruta3 = {
	nome: "Morango", 
    disponibilidade: true
}

function frutinhas(fruta1) {
    carrinho.push(fruta1)
}

function frutinhas(fruta2) {
    carrinho.push(fruta2)
}

function frutinhas(fruta3) {
    carrinho.push(fruta3)
}

frutinhas(fruta1)
frutinhas(fruta2)
frutinhas(fruta3)

console.log(carrinho)