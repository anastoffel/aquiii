/*Crie uma função que receba um objeto de pessoa (Exercício 2) e
crie um novo objeto mantendo as propriedades originais e
acrescentando:
Uma propriedade com a lista de suas comidas preferidas;
Uma propriedade que seja um objeto, com nome e idade, para
representar o melhor amigo da pessoa.
Ainda na função, imprima no console as propriedades desse
objeto seguindo o modelo abaixo:
"O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e
___. Seu melhor amigo se chama ___ e tem ___ anos"
*/


  


const pessoa = {
    nome : 'Coronel',
    idade : 20,
    generoMusical : 'Gaucha'

}

function criarNovoObjeto (pessoa){
    pessoa2 = {
        ...pessoa,
        favoriteFood : ["Massa", "Churrasco", "Aipim frito"],
        melhorAmigo : {
            nomeAmg : "General",
            IdadeAmg : 21,   
        }
    }
        console.log(`O nome da pessoa é ${pessoa2.nome} e suas comidas favoritas são ${pessoa2.favoriteFood[0]}, ${pessoa2.favoriteFood[1]} e ${pessoa2.favoriteFood[2]}.
     Seu melhor amigo se chama ${pessoa2.melhorAmigo.nomeAmg} e tem ${pessoa2.melhorAmiga.IdadeAmg} anos. `)
}

criarNovoObjeto(pessoa)