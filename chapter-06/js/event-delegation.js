function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {
  // Remove i tem da lista
  var target, elParent, elGrandparent;
  target = getTarget(e)
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;
  elGrandparent.removeChild(elParent);

  // Impede que o link leve o usuário para outro lugar
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}


// Configura ouvintes de evento para chamar itemDone() on click
var el = document.getElementById('shoppingList');
if (el.addEventListener) {
  el.addEventListener('click', function(e) {
    itemDone(e);
  }, false);
} else {
  el.attachEvent('onclick', function(e) {
    itemDone(e);
  });
}
