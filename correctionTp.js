document.getElementById('date').valuesAsDate=new Date();
document.getElementById('auteur').focus();
document.getElementById('ajouter').addEventListener('click',ajouterSavoir());

function ajouterSavoir(){
    // Je recupere les 3 valeurs
    let auteur= document.getElementById('auteur').value;
    let savoir= document.getElementById('savoir').value;
    let date= document.getElementById('date').value;
    // je créer un nouvel element
    let nouvelElement= document.createElement('div');
    nouvelElement.classList.add("card");
    let nouveauP1=document.getElementById('p');
    nouveauP1.innerText = savoir;
    let nouveauP2=document.getElementById('p');
    nouveauP2.innerText= 'Par'+ auteur+ " le"+ date;
    nouvelElement.appendChild(nouveauP1);
    nouvelElement.appendChild(nouveauP2);
    nouvelElement.addEventListener('click', supprimer);

    document.getElementById('cartes').appendChild(nouvelElement);
}
function supprimer(){
    if (confirm("on Supprime?")){
    this.remove();
}
}