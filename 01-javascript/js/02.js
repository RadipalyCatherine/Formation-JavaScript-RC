//--Déclarer un tableau indexé
var monTableau= [];
var myArray = new Array; // Autre notation, mais identique.

monTableau[0]= 'Hugo';
monTableau[1]= 'Rosemaël';
monTableau[2]= 'Aurélie';
monTableau[3]= 'Elodie';

console.log( monTableau);
console.log( monTableau[2]);// Aurélie
console.log( monTableau[3]);// Elodie

var nosPrenoms= [
    'Nia',
    'Catherine',
    'Gaelle',
    'Cindy',
    'Léna',
    'Astrid'
];

console.log( nosPrenoms);

//-- Créer un Objet en Javascript

var coordonnee= {
    // Propriété  :   Valeur         ,
    prenom        :   'Catherine'    ,
    nom           :   'RADIPALY'     ,
    age           :   26, 
    tel           :   '0690 76 42 06'
};

console.clear();
console.log( coordonnee );
console.log( coordonnee['prenom']);
console.log( coordonnee.prenom); // Ecriture a privilégier

// Ici,j'ai un tableau dans un tableau
// Ou encore un tableau a deux dimensions.
var annuaireDesApprenantes= [

    {
        prenom
    }
    ['Nia', 'VITALIS'],
    ['Angélique', 'JEAN-NOEL']
];

console.log( annuaireDesApprenantes[0][0]);
console.log( annuaireDesApprenantes[0][1]);// Pas très pratique...
console.log(annuaireDesApprenantes);

annuaireDesApprenantes = [
    {
        prenom: 'Laureen',
        nom: 'LABUTHIE'
    }
    {
        prenom: 'Rosemaël',
        nom: 'ANTHONY'
    }
    {
        prenom: 'Katharyna',
        nom: 'LUCINA'
    }
];

console.clear();
console.log( annuaireDesApprenantes );
console.log( annuaireDesApprenantes[1]['prenom']);

console.log( annuaireDesApprenantes[0].prenom);
console.log( annuaireDesApprenantes[0].nom);

console.log( annuaireDesApprenantes[1].prenom);
console.log(annuaireDesApprenantes[1].nom);

console.log(annuaireDesApprenantes[2].prenom);
console.log(annuaireDesApprenantes[2].nom);

var contacts = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        coordonnees: {
            adresse: {
                rue: 'Euvremont Gène',
                cp: '97110',
                ville: 'Pointe-à-Pitre',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'wf3@hl-media.fr',
            tel: {
                fixe: '0596 108 328',
                fax: '0596 108 632',
                port: '0783 97 15 15'
            }
        }
    },
    {
        prenom: 'Nia',
        nom: 'VITALIS',
        coordonnees: {
            adresse: {
                rue: 'Les Plaines',
                cp: '97139',
                ville: 'Les Abymes',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'nia971@gmail.com',
            tel: {
                fixe: '',
                fax: '',
                port: '0690 12 20 07'
            }
        }
    }
];

console.clear();
console.log( contacts );

console.log( contacts[0].coordonnees.adresse.pays.nom );
console.log( contacts[1].coordonnees.adresse.pays.nom );

// Cette structure de données s'appelle le format : JSON !
// C'est le format le plus utilisé pour échanger des données.
// Il est facile à reconnaitre, ce sont des objets dans un tableau...


//~Exercice~
//--Réaliser une structure JSON permettant de stocker des recettes de cuisine

var recettes= [
    {
        nom:'tiramisu',
        categorie: 'dessert',
        difficultes:"facile",
        coût:"pas chère",
        ingredients:"variable",
        quantite:"variable",
        duree de cuisson:"temps",
        etapes: "1","2",

       //~correction~

       var recettes=[
           {
               nom:'tiramisu',
               categorie:'dessert',
               sousCategorie:'gateaux',
               difficulte: 'facile',
               cout:'abordable',
               nombre de personnes: 8
               specialite: 'Italien',
               cuisson:{
                   preparation:30,
                   preparationUnite: 'minute',
                   duree: '',
                   temperature:'',
                   repos:120,
                   reposUnite:'minutes',
                   total:150,
                   totalUnite:'minutes'
           },
           ingredients: [
               {
                   nom:
               }
           ]
           ustensiles: [
               '1 Plat rectangulaire',
               '1 Spatule',
               '1 Saladier'
           ],
           instruction: [

           ]
       ]



    }
];

/*

NOTA BENE: Un objet respecte toujours le format
{
    propriet: valeur
}
ou, la valeur peut-être de plusieurs types:
{
    unBooleen: true,
    unNombre: 18,
    unString: 'je suis en string',
    unObjet:{
        propriete: valeur
    },
    unTableau: [
        'Matthieu', 'Marc', 'Luc','Hugo','Jean'
    ]
    }
}

*/

/*----------------------------------------------------
           AJOUTER UN ELEMENT DANS UN TABLEAU
------------------------------------------------------*/

console.clear();

var couleurs=['Rouge', 'Jaune','Vert'];
console.log( couleurs );

couleurs.push('Bleu'); // Ajoute a la fin du tableau
console.log( couleurs );

couleurs.unshift('Orange');// Ajoute au début
console.log( couleurs );


/*------------------------------------------------------
            SORTIR UN ELEMENT DANS UN TABLEAU
---------------------------------------------------------*/

/*
* La fonction pop() supprime le dernier
* élément d'un tableau et retourne cet élément.
*/

var monDernierElement=couleurs.pop();
console.log( couleurs);
console.log( monDernierElement );

/**
 * La même chose est possible avec le premier élément
 * en utilisant: shift().
 * 
 * La fonction splice() vous permet de faire sortir un
 * ou plusieurs éléments du tableau.
 */

 
 





