// Selecionando o ponto de partida e encontra seus irmãos

var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Altera o valor dos atributos class dos irmãos
prevItem.className = 'selector-1';
nextItem.className = 'selector-1';
