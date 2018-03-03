// querySelector() retorna somente a primeira correspondência
var el = document.querySelector('li.hot');
el.className = 'selector-1';

// querySelectorAll retorna uma NodeList
// o 2° elemento correspondente (o 3o. item da lista) é selecionado e alterado
var els = document.querySelectorAll('li.hot');
els[1].className = 'selector-1';
