function setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMCotentLoaded', setup, false);

window.addEventListener('beforeunload', function(event) {
    return 'You have changes that have not been saved...';
}, false)