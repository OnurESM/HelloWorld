// question 1:
let tableauNombres= [];
let compteur=0;

do {
    compteur++;
    let number=Math.floor(Math.random()*100) ;
    if (tableauNombres.indexOf(number)===-1){
        tableauNombres.push(number);
    }
}
while(tableauNombres.length!==100)
function comparer (a, b){
return a-b;}
tableauNombres.sort(comparer);
console.log (tableauNombres + " " + compteur +" essais");

// question 1 correction avec le prof:
const TAILLE_TABLEAU=100;
let  tableauu = new Array(TAILLE_TABLEAU);
tableauu.fill(false);
//[false,false,false,false]
let comptheure= TAILLE_TABLEAU;
let nbTirage=0;
do{
    let hasard= Math.floor(Math.random()*100);
    if (tableauu[hasard]===false){//Si le br n'as jamais été tiré
        comptheure--;// je décrémente le compteur
        tableauu[hasard]=true;// Et je change la valeur du tableau a true;
    }
    // tant que le compter est supérieur à zéro
} while(comptheure>0)
console.log(nbTirage);

// question 2 :

let phrase= " une chaine avec des lettres dans un certain ordre pour donner du sens";
phrase=phrase.replaceAll(" ","");
let tableaulettre=phrase.split('');
tableaulettre.sort();
console.log(tableaulettre.toString());

// correction du prof:
let chaine=" une chaine avec des lettres dans un certain ordre pour donner du sens";
let tableau= Array.from(chaine.replace( / /g,''));
tableau.sort();
console.log(tableau.toString());

//Question 3: fait avec le prof

let chainee= "une phrase sans majusucle";
let tableaumot= chainee.split(" ");
let resultat="";
for (const chaqueMot of tableaumot){
    //console.log(chaqueMot);
   // chaqueMot[0].toUpperCase()
    resultat+= chaqueMot.substring(0,1).toUpperCase();
    resultat+= chaqueMot.substring(1).toLowerCase();
    resultat+=" ";
    resultat+=" ";
}
console.log(resultat);








