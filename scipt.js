console.log("HelloWorld vivent les CDA 092 & DWWM 147B");
function addition(nbre1, nbre2){
    let resultat= nbre1+nbre2;
    return resultat;
}
console.log(addition(20, 22));

let hasard = Math.random();
hasard = Math.floor (hasard*100);
if (hasard % 2 ===0){
    console.log(hasard+" est une nombre pair");
}
else{
    console.log(hasard+" est un nombre impair");
}
for (let i=0;i<35; i++){
    let resultat='';
    if (i % 3 ===0){
        resultat= resultat+"Fizz";
        // resultatt+= "Fizz";
    }
    if( i % 5===0){
        resultat+="Buzz";
    }
    if (resultat=== ''){
        resultat+=i;
    }
    console.log(resultat);
}



