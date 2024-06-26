

function cliqueNoBotão() {
    const imagem = document.getElementById("imagem");
    if (imagem.style.display === "none"){
        imagem.style.display = "block"; //Torna visivel
    }else {
        imagem.style.display = "none"; //Oculta a imagem se ja estiver visivel
    }
    
}

document.getElementById("myButton").addEventListener('click', cliqueNoBotão);