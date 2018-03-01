var table = 3;                  // Unidade da tabuada
var operator = 'addition';      // Tipo de cálculo (o padrão é adição)
var i = 1;                      // Configura o contador como 1
var msg = '';                   // Mensagem

if (operator === 'addition') {  // Se a variável operator for addition
  while (i < 11) {              // Enquanto o contador for menor que 11
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';  // Cálculo
    i++;
  }
}
else if (operator === 'multiply') { // Caso contrário
  while (i < 11) {                  // Enquanto o contador for menor que 11
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';   // Cálculo
    i++;                           // Soma 1 ao contador
  }
}
else {
  msg += 'Nenhuma Operação Selecionada';
}

// Imprime a mensagem na página

var el = document.getElementById('text');
el.innerHTML = msg;
