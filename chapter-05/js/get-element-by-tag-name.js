var elements = document.getElementsByTagName('li');
i = 0;

if (elements.length > 0) {
  for (i; i < elements.length ; i++) {
    var el = elements[i];
    el.className = 'select-1';
  }
}
