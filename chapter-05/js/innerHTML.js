// Armazena o primeiro item da lista em uma variável
var firstItem = document.getElementById('one');

// Obtém o conteúdo do primeiro item de lista
var itemContent = firstItem.innerHTML;

// Atualiza conteúdo do primeiro item de lista de modo que ele se torne um link
firstItem.innerHTML = '<a href=\"http://example.org\"> Link: ' + itemContent + '</a>'
