var elList, addLink, newEl, newText, counter, listItems;        // Declara variáveis

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    newEl = document.creatElement('li');
    newText = document.createTextNode('New List Item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCout() {
    listitems = list.getElementByTagName('li').length;
    counter.innerHTML = listitems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);