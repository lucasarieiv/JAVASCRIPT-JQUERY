// ADICIONA ITENS AO INÍCIO E AO FIM DA LISTA
var list = document.getElementsByTagName('ul')[0];        // Obtém o elemento <ul>

// ADICIONA UM NOVO ITEM AO FIM DA LISTA
var newItemLast = document.createElement('li');           // Cria o elemento
var newTextLast = document.createTextNode('cream');       // Cria o nó de texto
newItemLast.appendChild(newTextLast);                     // Adiciona o nó de texto ao elemento
list.appendChild(newItemLast);                            // Adiciona o elemento ao fim da lista


// ADICIONA UM NOVO ITEM AO INÍCIO DA LISTA
var newItemFirst = document.createElement('li');          // Cria elemento
var newTextFirst = document.createTextNode('kale');       // Cria o nó de texto
newItemFirst.appendChild(newTextFirst);                   // Adiciona o nó de texto ao elemento
list.insertBefore(newItemFirst, list.firstChild);         // Adiciona o elemento à lista


var listItems = document.querySelectorAll('li');          // Todos os elements <li>

// ADICIONA A CLASSE COOL A TODOS OS ITENS
var i;                                                    // Variável Contadora
for (i = 0; i < listItems.length; i++) {                  // Itera pelos elementos
  listItems[i].className = 'cool';
}


// ADICIONA O NÚMERO DE ITENS DA LISTA AO TÍTULO
var heading = document.querySelector('p');                // Elemento p
var headingText = heading.firstChild.nodeValue;           // Texto do elemento h2
var totalItems = listItems.length;                        // No. de elements <li>
var newHeading = headingText + '  ' + totalItems; // Conteúdo
heading.textContent = newHeading;
