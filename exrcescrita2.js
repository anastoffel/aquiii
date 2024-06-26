const pessoa = {
	nome: "Bruno", 
  idade: 23, 
	profissao: "Instrutor"
}

function minhaFuncao(pessoa) {
  const resultado = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
	
  return resultado
}

console.log(minhaFuncao(pessoa))