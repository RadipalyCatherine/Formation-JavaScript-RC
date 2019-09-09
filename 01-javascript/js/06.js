/*--------------------------
|       LES FONCTIONS
-----------------------------*/

/**
 * Déclarer une fonction
 * ---------------------------------------
 * Les instructions ne seront exécutées
 * que lorsque ma fonction sera appelée.
 * ---------------------------------------
 */
function bonjour(){
    // -- instruction js --
    // -- instruction js --
    alert( 'Bonjour !');
    // -- instruction js --
    // -- instruction js --

}

/**
 * J'execute ma fonction, et je
 * déclenche ses instructions.
 */
// bonjour();

/**
 * Ici, notre fonction 'ditBonjour' définie 2 arguments.
 * Au moment de l'executer nous affecterons une valeur
 * à chaque arguments. Ainsi, prenom sera égal à 'Catherine'
 * et nom sera égal à 'RADIPALY'.
 */

 function ditBonjour( prenom, nom) {
     console.log(prenom + ''+ nom);
     document.write(
         'Bonjour <strong>'
         + prenom
         + ''
         + nom
         + '</strong> !<br>'
     );
 }

 ditBonjour( 'Hugo','LIEGEARD');


 /* -----------------------------------------------------------------------------------
 EXERCICE 1:
 Créez une fonction permettant d'effectuer l'addition de deux nombres (nb1 et nb2).
 ------------------------------------------------------------------------------------*/

 function somme(nb1, nb2) {
 console.log(nb1 + nb2);
 }

 alert ("somme"+ resultat);

 // Correction de l'exercice:


 /* ------------------------------------------------------------------------------------
 EXERCICE 2:
 Créez une fonction permettant d'effectuer le calcul de la TVA d'un montant HT.
 Sachant que le taux de la TVA peut varier: 5,5; 8,5; 10,20.
 Retourner le montant TTC.

 -------------------------------------------------------------------------------------*/

 function TVA(montantHT, taux) {
 console.log(montantHT * taux/100);
 }

 // Correction de l'exercice:

 function calculTva( montantHT, tauxTVA= 8,5 ) {
     return montantHT + (montantHT * (tauxTva/100) );
 }

 var montantTtc1 = calculTva(10);
 var montantTtc2 = calculTva(10, 5.5);
 var montantTtc3 = calculTva(10, 20);

 console.log( montantTtc1);
 console.log( montantTtc2);
 console.log( montantTtc3);


 /* ---------------------------------------------------------------------------------------
 EXERCICE 3:
 Créez une fonction permettant d'effectuer la conversion d'un montant de EURO et DOLLARS US.

 -----------------------------------------------------------------------------------------*/

 function conversion(deviseinitiale,convert="dollars") {
 console.log(deviseinitiale);
 console.log(convert);
}

// Correction de l'exercice:

function convertEurToUsd( montantEuro,tauxConversionUsd = 1.1035) {
    return montantEuro * tauxConversionUsd;
}

var montantEur=20;
var montantUsd= convertEurToUsd( montantEur );
console.log(
    montantEur
    +' € en dollars donne:'
    + montantUsd
    + '$');

    /* ----------------------------------------------------------------------------------------
    EXERCICE 4:
    


























