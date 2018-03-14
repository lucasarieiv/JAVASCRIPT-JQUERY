var removeEl = document.getElementsByTagName('li')[3];     // O elemento a remover

var containerEl = removeEl.parentNode;                    // Seu elemento pai

containerEl.removeChild(removeEl);                        // Remove o elemento
