class Professor{
    nome: string
    idade: number
    ano_exp: number

    constructor(nome: string, idade: number, ano_exp: number){
        this.nome = nome
        this.idade = idade
        this.ano_exp = ano_exp
    }
}

class Restaurante{
    prof: Professor
    nome_escola: string
    end_escola: string
    num_escola: number

    constructor(prof: Professor, nome_escola: string, end_escola: string, num_escola: number){
        this.prof = Professor
        this.nome_escola = nome_escola
        this.end_escola = end_escola
        this.num_escola = num_escola
    }

    apresentacaoRest(): void{
        console.log(`Olá, somos o restaurante ${this.nome_escola} e nosso chef é ${this.prof.nome}`)   
    }
}

let cozinheiro = new Chef("Rogerio", 52, 32)

let restaurante = new Restaurante(cozinheiro, "Prato Fino", "Rua dos Restaurantes", 100)

restaurante.apresentacaoRest()
