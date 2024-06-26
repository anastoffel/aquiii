const readlineSync = require('readline-sync');

const tarefa1 = readlineSync.question("O que vai fazer pimeiro hoje?");
const tarefa2 = readlineSync.question("E em seguida?");
const tarefa3 = readlineSync.question("E por ultimo?");

let listaDeTarefas = [tarefa1, tarefa2, tarefa3]
 
console.log(`Isso que vais fazer hoje ${listaDeTarefas}`)

let removerTarefa = Number(readlineSync.question("Escolha uma tarefa para tirar:"))
