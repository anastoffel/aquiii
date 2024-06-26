const readlineSync = require('readline-sync');

const nomem = readlineSync.question("Qual seu nome:");
const email = readlineSync.question("Qual seu email:");
console.log("Olá " + nomem );
console.log("Seu " + email + " foi cadastrado com sucesso! Seja bem-vindo(a)!")