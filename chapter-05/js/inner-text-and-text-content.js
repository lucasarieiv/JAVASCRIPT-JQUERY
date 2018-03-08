var firstItem = document.getElementById('one');           // Localiza o 1° item da lista
var showTextContent = firstItem.textContent;              // Obtém o valor de textContent
var showInnerText = firstItem.innerText;                  // Obtém o valor de textContent

// Exibe o conteúdo dessas duas propriedades no final da lista
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdought bread';               // Atualiza o 1° item da lista
