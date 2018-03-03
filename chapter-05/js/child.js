// Seleciona o ponto de partida e encontra seus irmãos
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// Altera o valor dos atributos class dos irmãos
firstItem.setAttribute('class', 'selector-1');
lastItem.setAttribute('class', 'selector-1');
