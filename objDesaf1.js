const readlineSync = require('readline-sync');




function cadastro(){

    nome = readlineSync.question("Nome completo: ");
    idade = readlineSync.question("Sua idade: ");
    profissao = readlineSync.question("Sua profissão: ");

    const pessoinha = {
        nome,
        idade,
        profissao 
    }

    console.log(pessoinha)
    console.log(typeof pessoinha)
}

cadastro()