//--Déclarer un tableau indexé

/* ------------------------------------------

            LES OPERATEURS ARITHMETIQUES

---------------------------------------------*/


// -- 1. Création d'une fonction

function presentation(){

//--2. Demande à l'utilisateur son prénom via un prompt

var prenom = prompt("Quel est votre prénom ?", '<Votre prénom>');
console.log( prenom);

//--3. Je lui demande son age

var age = parseInt(
 prompt( "Bonjour" + prenom + ", Quel age as-tu ?", '<Votre age>')
);
console.log( age);
console.log( typeof age);

//--4. Calculer l'année de naissance

var objetDate= new Date();
var anneeActuelle = objetDate.getFullYear();
var dateDeNaissance = objetDate.getFullYear() - age;
alert("Tu es donc né en" + dateDeNaissance);

//--5. Afficher le récapitulatif

document.write("Bonjour" + prenom + "tu as" + age + "!");

}

presentation();
