document.getElementById('clickBtn').addEventListener('click', function(){
    alert('click: Acionado quando um elento é clicado.')
});

document.getElementById('dbclickBtn').addEventListener('dblclick', function(){
    alert('dblclick: Acionado quando um elento é clicado duas vezes seguidas.')
});

document.getElementById('mousedownBtn').addEventListener('mousedown', function(){
    alert('mousedown: Acionado quando um botão do mouse é pressionado sobre um elemento.')
});

document.getElementById('mouseupBtn').addEventListener('mouseup', function(){
    alert('mouseup: Acionado quando um botão do mouse é solto.')
});

document.getElementById('mousemoveBtn').addEventListener('mousemove', function(){
    alert('mousemove: Acionado quando o mouse é movido sobre um elemento.')
});

document.getElementById('mouseoverBtn').addEventListener('mouseover', function(){
    alert('mouseover: Acionado quando o mouse entra em um elemento.')
});

document.getElementById('mouseoutBtn').addEventListener('mouseout', function(){
    alert('mouseout: Acionado quando o mouse sai de um elemento.')
});

document.getElementById('contextmenuBtn').addEventListener('contextmenu', function(event){
    event.preventDefault();
    alert('contextmenu: Acionado quando o botão direito é clicado .')
});

// Eventos do Teclado

document.getElementById('keydownBtn').addEventListener('keydown', function(){
    alert('keydown: Acionado quando uma tecla é pressionada.')
});

document.getElementById('keypressBtn').addEventListener('keypress', function(){
    alert('keypress: Acionado quando uma tecla é pressionada e liberada.')
});

document.getElementById('keyupBtn').addEventListener('keyup', function(){
    alert('keyup: Acionado quando uma tecla é liberada.')
});


// Eventos de Janela/Documento 
window.addEventListener('load', function() {
    this.alert('load: Acionado quando um recurso e seus recursos dependentes terminam de carregar.')
});

window.addEventListener('unload', function() {
    this.alert('unload: Acionado quando a página está prestes a ser descarregada.')
});

window.addEventListener('resize', function() {
    this.alert('resize: Acionado quando a janela do navegador é redimensionada.')
});

window.addEventListener('scroll', function() {
    this.alert('scroll: Acionado quando o conteúdo de um elemento é rolado.')
});


// Eventos de Tempo

document.getElementById('setTimeoutBtn').addEventListener('click', function(){
    setTimeout(function(){
        alert('setTimeout: Acionado após um intervalo de tempo especificado.')
    }, 2000);
});

document.getElementById('setIntervalBtn').addEventListener('click', function(){
    setInterval(function(){
        alert('setInterval: Acionado repetidamente em intervalos de tempo especificados.')
    }, 3000);
});