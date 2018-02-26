var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDay();

var el = document.getElementById('info');
el.innerHTML = '<h2>Data: ' + ('0' + day) + ' / ' + (month) + ' / ' + year + '</h2>';
// 0 é JANEIRO
