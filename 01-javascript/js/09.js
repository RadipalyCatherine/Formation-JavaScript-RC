//--Déclarer un tableau indexé

/* ------------------------------------------
            LES BOUCLES
---------------------------------------------*/

/**
 * Pour i=0; tant que i est strictement
 * *inférieur ou égale à 10; alors j'incrémente i de 1.
 */
for (let i= 0; i<= 10; i++) {
    document.write( '<p>Instruction executee : <strong>' + i + '</strong></p>');
}

document.write('<hr>');

let j = 0;
/**
 * Tant que j est inférieur à 10;
 * j'execute ma boucle.
*/
while ( j<=10){

    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');
    j++; // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
}

document.write( '<hr>');

/*------------------------------------------
                EXERCICE

-------------------------------------------*/

const Prenoms = ['Jean','Marc','Paul','Luc','Hugo','Jacques'];

/** 
 * CONSIGNE : Grâce à une boucle FOR ou autre..., affichez la liste des prénoms du tableau ci-dessus dans la console, ou sur votre page.
*/

for (incrémentation){
    'Jean';
    'Marc';
    'Matthieu';
    'Paul';
    'Luc';
    'Hugo';
    'Jacques';
}

// Manuellement dans la console

console.log( Prenoms[0]);
console.log( Prenoms[1]);
console.log( Prenoms[2]);
console.log( Prenoms[3]);
console.log( Prenoms[4]);
console.log( Prenoms[5]);
console.log( Prenoms[6]);
console.log('---------');

// Automatique avec une boucle

for (let index= 0; index <= 6; index++) {
    console.log( Prenoms[ index]);
}


//Variante, calcul automatique de la dimension du tableau.

console.log('-------');
for (let index = 0; index < Prenoms.length ; index++ ) {
    console.log( Prenoms[ index] );
}


/*

Exercice : Addition

Créer un tableau qui contient les valeurs suivantes: 1,2,3,4,5,6,7,8,9
Faire une boucle qui permet d'additionner le total des chiffres. 
Afficher dans un console.log le total

*/



const nombres = [1, 2,3,4,5,6,7,8,9];

// -- 1. Déclarer une variable permettant de garder en memoire la somme
let resultat;

// -- 2. Créer une boucle permettant d'additionner les nombres
for (let i = 0 ; i < nombres. length ; i++) {

    // On sait que i prendra successivement les valeurs de 0...10
    // Comment additionner les valeurs?
    resultat = ( resultat + nombres[ i]);
    resultat += nombres[i];
}

console.log( resultat);

let a = 0;

while (a<=0)

for (incrementation);

var=


const nombres = [1, 2, 3,]

/*

Exercice: Vos meilleurs choix

Créez un tableau qui contient 3 noms d'acteurs
Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : Transformez en : "Le premier est Stalone", "Le deuxième est Cruiz", etc...
*/

//--Déclarer un tableau indexé
var monTableau= [];
var myArray = new Array; // Autre notation, mais identique.

monTableau[0]= '';
monTableau[1]= 'Le numero 1 est Stalone';
monTableau[2]= 'Le numero 2 est Cruiz';
monTableau[3]= 'Le numero 3 est Smith';

console.log( monTableau);
console.log( monTableau[2]);// Le premier est Stalone
console.log( monTableau[3]);// Le deuxième est Cruiz
console.log(monTableau[4]);// Le troisième est Smith

var nomsacteurs= [
    'Stalone',
    'Cruiz',
    'Smith'
];

for (incrémentation){
    'Le premier est Stalone';
    'Le deuxième est Cruiz';
    'Le troisième est Smith'.
}



console.log( nosPrenoms);


//-- Créer un Objet en Javascript


console.clear();
console.log( coordonnee );
console.log( coordonnee['prenom']);
console.log( coordonnee.prenom); // Ecriture a privilégier


Correction

const acteurs = ['Eddy Murphy', 'Idriss Elba', 'Jackie Chan'];
const quantieme = ['Premier', 'Deuxième', 'Troisième'];

console.clear();

for (let i = 0; i < acteurs.length; i++) {

    console.log( 'i='+ i);
    console.log( acteurs [ i]);
    // console. log( 'Le numéro' + i + 'est' + acteurs [i]);
    console.log('Le' + quantieme[i]+ 'est' + acteurs [i]);
    console.log('---');
}

/*

EXERCICE :
Utilisez la méthode getMonth() de l'objet Date pour retourner
le numéro du mois en cours : 0 pour janvier, 1 pour février
et ainsi de suite jusqu'à 11 pour décembre: var mois = (new Date). getMonth().

Ecrivez un petit script qui retourne le nom complet du mois dans une alerte.
Servez-vous d'untableau pour stocker les noms des mois.

*/

const month = (new Date).getMonth();
console.log( month);

const months = ['Janvier','Février', 'Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre'];

console.log( months[month] );// Je veux dans 'months' récupérer la valeur du mois qui se situe à l'index 'month'.









