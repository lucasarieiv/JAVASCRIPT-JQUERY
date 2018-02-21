// Cria as variáveis para a mensagem de boas-vindas
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order: ';
// Concatena as três variáveis acima para criar a mensagem de boas-vindas
var welcome = greeting + name + message;

// Cria variáveis para armazenar detalhes sobre a placa
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Obtém o elemento que tem o id greeting
var el = document.getElementById('greeting');
// Substitui o conteúdo desse elemento pela mensagem de boas-vindas
// personalizada
el.textContent = welcome;

// Obtém o elemento que tem o id userSign e então atualiza seu conteúdo
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Obtém o elemento que tem o id tiles e atualiza seu conteúdo
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Obtém o elemento que tem o id subTotal e atualiza seu conteúdo
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal;

// Obtém o elemento que tem o id shipping e atualiza seu conteúdo
var elSubTotal = document.getElementById('shipping')
elSubTotal.textContent = '$ ' + shipping;

// Obtém o elemento que tem o id grandTotal e atualiza seu conteúdo
var elGrandTotal = document.getElementById('grandTotal')
elGrandTotal.textContent = '$ ' + grandTotal;
