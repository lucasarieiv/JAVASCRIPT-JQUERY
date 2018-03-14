var firstItem = document.getElementById('one');       // Obtém o 1° item
firstItem.className = 'complete';                     // Muda seu atributo class

var fourthItem = document.getElementsByTagName('li').item(2);   // Obtém o 4° item
fourthItem.setAttribute('class', 'cool');                       // Adiciona um atributo a ele
