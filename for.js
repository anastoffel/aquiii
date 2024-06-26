for(let i = 0; i < 10; i++) {
    //console.log(i)
}



//const number = [15, 32, 46, 55, 64, 73, 89]
//const maiorNumero = 0
 /*for(let i = 0; i < number.length; i++) {
    const elemento = number[i]
    console.log( elemento)
}*/


let number = [15, 32, 46, 320, 64, 73, 89]
let maior = 0

function maiorNumero(array) {
    for(let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
         maior = array[i]
      }
    }
    return maior
}

console.log('O maior numero é:' + maiorNumero(number))








