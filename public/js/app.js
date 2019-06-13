
// Récuperer la valeur de is_register dans le localStorage (null quand on arrive sur la landing page la première fois)
let storage = localStorage.getItem('is_register');

// Elements sur lesquels on va agir

let mainDiv = document.getElementById('main-form');
let answer = document.getElementById('replace');

// SI storage = null, on AFFICHE l'input et le button (et on cache la réponse)
if (!storage) {
    mainDiv.style.display = '';
    answer.style.display = 'none';
}
// SINON, on CACHE l'input et le button (et affiche la réponse)
else {
    mainDiv.style.display = 'none';
    answer.style.display = 'block';
}

//Appel de la fonction lorsqu'on CLICK (button)
function changeStyle() {
    // on enregistre dans le local storage la clé is_register avec la valeur TRUE
    localStorage.setItem('is_register', true);
    // storage recuprere la valeur de is_register dans le local storage (true)
    storage = localStorage.getItem('is_register');

    // on cache alors l'input et le button (et on affiche la réponse)
    mainDiv.style.display = 'none';
    answer.style.display = 'block';
}



// Alternative pour afficher la réponse après envoie du form

/**let form = document.getElementById('form');
 form.innerHTML = '<p>Votre inscription à bien été prit en compte.</p>'**/






