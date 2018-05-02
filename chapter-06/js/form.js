var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');


function packageHint() {
  var package = this.options[this.selectedIndex].value;
  if (package == '50') {
    elPackageHint.innerHTML = 'Salve R$ 10,00 se você pagar por 2 anos!';
  } else if (package == 'Null'){
    elPackageHint.innerHTML = 'Escolha um Pacote';
  } else {
    elPackageHint.innerHTML = 'Ótima Escolha';
  }
}

function checkTerms(event) {
  if (!elTerms.checked) {
    elTermsHint.innerHTML = 'Você Deve Aceitar os Termos!';
    event.preventDefault();
  }
}
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
