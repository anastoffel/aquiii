let i = 10 // começo

while (i >= 0) { //condição de continuação

    console.log(i)//ação repetida
    if (i === 0){
        console.log("BOOOM")
    } else if (i % 2 === 0){
        console.log('TIC')
    } else {
        console.log('TAC')
    }
    i-- // incremento
}
