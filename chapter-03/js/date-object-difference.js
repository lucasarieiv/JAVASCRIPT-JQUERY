var today = new Date();
var yaer = today.getFullYear();
var est = new Date('apr 16, 1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('info');
elMsg.innerHTML = '<h2>' + Math.floor(difference) + ' years of oline travel advice </h2>';
