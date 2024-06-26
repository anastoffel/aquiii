class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    cumprimentar(): void{
        console.log(`Olá meu nome é ${this.nome}.`)
    } 
}


class Crianca extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

class Adulto extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

class Idoso extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let person = new Pessoa("Maurício", 22)
let kid = new Crianca("Sofia", 4)
let adult = new Adulto("Ana", 20)
let old = new Idoso("Matuzalem", 80)

person.cumprimentar()
kid.cumprimentar()
adult.cumprimentar()
old.cumprimentar()