const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 function imprimirApelido(pessoa) {

     console.log(`Eu sou o ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]},${pessoa.apelidos[1]}, ${pessoa.apelidos[2]} `);
 }

 imprimirApelido(pessoa)