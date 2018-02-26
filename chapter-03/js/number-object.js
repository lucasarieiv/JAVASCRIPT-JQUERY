var originalNumber = 10.23456;

var msg = '<h2>original Number:</h2><p>' + originalNumber + '</p>';
msg += '<h2>toFixed()</h2><p>' + originalNumber.toFixed(3); +'<p>';
msg += '<h2>toPrecision()</h2><p>' + originalNumber.toPrecision(3); '<p>';
var el = document.getElementById('info');
el.innerHTML = msg;
