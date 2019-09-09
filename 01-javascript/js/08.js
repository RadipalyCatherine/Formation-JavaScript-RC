//--Déclarer un tableau indexé

/* ------------------------------------------
            LES CONDITIONS
---------------------------------------------*/


var majoriteLegaleFR = 18;

if( 19 >= majoriteLegaleFR) {
    /**
     * Comme 19 est bien supérieur à 18 (majoriteLegalFr);
     * alors les instructions sont exécutées
     */
}

if( 14 >= majoriteLegaleFR) {
    /**
     * Comme 14 est bien inférieur à 18 (majoriteLegaleFr);
     * alors les instructions ne sont pas exécutées.
     */
    alert('Bienvenue !');
} else if ( 18== majoriteLegaleFr) {
    /**
     * Comme 18 est égale à la majoriteLegaleFr;
     * la condition s'execute !
     */
    alert("C'est un peu juste non?!");
} else { // LE ELSE N'EST PAS OBLIGATOIRE
/**
 * Si aucune des conditions si dessus n'ont été validés;
 * alors je rentre dans le "else".
 */
alert("Va voir chez Google si...");
}

/*---------------------------------------------------------------------------
EXERCICE
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue,
sinon, je fais une redirection sur Google après lui avoir signalé le soucis.
---------------------------------------------------------------------------*/

var agevisitor = prompt("Quel est votre age ?", '<Votre age>');

if( agevisitor >= majoriteLegaleFR) {
    /**
     *  Comme 20 est largement supérieur à 18 (majoriteLegaleFr);
     * alors je lui souhaite la bienvenue.
     */
    alert('Bienvenue !');

}
    else{
    /**
     * Comme 16 est inférieur à 18 (majoriteLegaleFr);
     * alors les instructions ne sont pas exécutées;
     * redirection vers Google.
     */
    alert('Désolé conformément à la loi du code informatique cette page ne vous est pas accessible! Veuillez vous redirigé vers le lien qui suit https://www.google.com/');
    }

/*

//--1. Créer une fonction permettant de vérifier la majorité d'un utilisateur

const majoriteLegaleFr = 18;
function monUtilisateurEstMajeur( age ){
if( age >=18 ) {
        return true;// oui
    } else{
        return false;// non
    }
}




//--2. Je demande à l'utilisateur son age.

const age= parseInt(
    prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre age>")
);

//--3. Verification de son age (Condition)
if( monUtilisateurEstMajeur( ageSaisieParMonUtilisateur) ){
    
    alert("Bienvenue sur mon site réservé aux majeurs !");

} else{

//--4. Redirection en cas d'echec
alert('Vous devez être majeur pour accéder à ce site.');
document.location.href="https://google.fr";

}

/*-----------------------------------------------------------------------\
|                       LES OPERATEURS DE COMPARAISON                    |
|                                                                        |
|------------------------------------------------------------------------|

L'opérateur de comparaison "=="(double égale) signifie: Egal à.
Il permet de vérifier que 2 variables sont identiques.

L'opérateur de comparaison "==="(triple égale) signifie: Strictement égal à. 
Il va comparer la valeur, mais aussi le type!

if( 14 =="14") {} = true
if( 14 === '14') {} = false
if( 14 === 14) {} = true

L'Opérateur " != ": Différent de.
L'Opérateur " !== ": Strictement Différent de.

if( 12 != 14){}= true
if( 12 !== '14'){}= true
if( 12 !== 12) {}= false
if( 12 !== '12') {} = true ; Ici, 12 est bien différent
de 12 à cause du type.

/*-----------------------------------------------------------------------------------------------------
EXERCICE : http://sharemycode.fr/consigne
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
---------------------------------------------------------------------------------------------------------

// //-- BASE DE DONNEES

const email = parseInt;
prompt ("<saisissez votre mot de passe>")

vérification du mot de passe
alert("mot de passe correct!")

if("mot de passe est (pingouintropical)"){
    }else
le site continue l'ouverture de la page
if it's false

alert;
}Veuillez répondre à la question suivante: Quel est votre sport favori?

CORRECTION

// // --BASE DE DONNEES

const email= "wf3@hl-media.fr";
const mdp = "wf3";

//-- 1. Demander à l'utilisateur son email/ mdp
const emailPrompt = prompt( "Quel est votre e-mail?","<Saisissez votre email>")


