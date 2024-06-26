function filmes() {
    let filme = {
        nome:'Gigantes de Aço',
        anoDeLancamento: 2011,
        
        }
    let filme2 = {
        nome:'Bastardos Inglórios',
        anoDeLancamento: 2009
    }   
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme.anoLans < filme2.anoDeLancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme.anoLans === filme2.anoDeLancamento}`)
}

filmes()
