var itemTwo = document.getElementById('two');           // Obtém o 2° item da lista

var elText = itemTwo.firstChild.nodeValue;              // Obtém seu conteúdo de texto

elText = elText.replace('Carne de Sol', 'Guizado');      // Muda pine nuts para Guizado

itemTwo.firstChild.nodeValue = elText;
