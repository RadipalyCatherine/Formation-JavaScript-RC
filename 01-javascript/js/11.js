//--Déclarer un tableau indexé

/* ------------------------------------------
            MANIPULATION DES CONTENUS EN JS
---------------------------------------------*/

// 1. Création d'une fonction 'l'
function l(e){
    console.log(e);
}

// 2.Identique, sauf que la fonction est stockée dans une variable 'l'
l= function(e) {
    console.log(e);
}

// 3. Identique, mais avec des fonctions fléchés ECMA 6.
l= e => console.log(e);

//Je souhaite récupérer mon lien google.
const google= document.getElementById('google');
log(google);

//--Maintenant, je souhaite accéder aux informations de ce lien.

//--A : Le lien vers lequel pointe la balise
l( google.href);

//--B : l'ID de la balise
l( google.id);

//--C : La classe de la balise
l( google.className);

//--D : Le texte de la balise
l(google.textContent);

/* --------------------------------------

        AJOUTER UN ELEMENT DANS MA PAGE

----------------------------------------*/

// Je crée un élément span que je stock dans ma constante.
const span = document.createElement( 'span');

// Je veux donner un ID
span. id = 'mnSpan'

// Donner du texte
span. textContent = 'mon jolie texte en js';

// J'ai placé a l'interieur de la balise google mon span.
google.appendChild( span);


/*

EXERCICE PRATIQUE

A l'aide de javascript, créez un champ "input" type text avec
 un ID unique.Affichez ensuite dans une alert, la saisie de 
 l'utilisateur.
 */

 const input = document. createElement('input');
 input.id = 'monInput';

 //--Ajoutez le champs input dans le <body> du document.
document.body.appendChild( input);

/**
 * Permet d'afficher la valeur du champ 'input'
 */
function afficherLa Saisie() {
    alert( input.value);
}

/**
 * Permet de déclarer un écouteur d'évènements sur le champ input.
 */
input.addEventListener('change',afficherLaSaisie);

 // -- Trouver la solution pour récupérer la saisie de l'utilisateur

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

span.title = 'Titre de mon Article';






