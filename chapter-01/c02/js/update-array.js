// Cria o Array
var colors = ['white',
              'black'
              'custom'];

// Atualiza o terceiro no Array
colors[2] = 'beige';

// Obtém o elemento com o id colors
var el = document.getElementById('colors');

// Substitue o terceiro item no array
el.textContent = colors[2];
