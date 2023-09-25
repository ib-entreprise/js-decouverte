// console.log("********************************************");
// console.log("********** EXECRICE 2 **********************");
// console.log("********************************************");

// let age = prompt("quel age avez vous ?");

// if(age < 18){
//     console.log("vous etes mineurs");
// }else if(age <= 21){
//     console.log("hey ! vous etes majeur !");
// }
// else{
//     console.log("vous avez la mjourite internationnale ");
// }




// console.log("********************************************");
// console.log("********** EXECRICE 1 **********************");
// console.log("********************************************");

// let firstName = prompt("Veuillez entrer un premier prenon");
// let lastName = prompt("Veuillez entrer un second prenon");
// let firstDayState = prompt("Veuillez entrer un premier etat du jour");
// let secondDayState = prompt("Veuillez entrer un second etat du jour");
// let heure = prompt("Veuillez entrer une heure");
// let jour = prompt("Veuillez entrer un jour");


// console.log(firstName+" : Bonjour");
// console.log(lastName+ " : Bonjour"+ firstName +" ! comment vas-tu ?");
// console.log(firstName+ " :"+ firstDayState +" ! et toi?");
// console.log(firstName+ " :"+ secondDayState +", je te remercie");
// console.log(firstName+ " quelle heure est-il ?");
// console.log(lastName+ " il est "+ heure+ " heures");
// console.log(firstName+ " d'acc, merci");
// console.log(lastName+ " Ou manges-tu aujourd'hui ?");
// console.log(firstName+ "  je rentre chez moi tous les mardis");
// console.log(lastName+ " d'acc,");


// console.log("********************************************");
// console.log("********** EXECRICE 3 **********************");
// console.log("********************************************");

// let var1 = prompt("donner le nombre 1");
// let var2 = prompt("donner le nombre 2");
// let var3 = prompt("donner le nombre 3");
// if(var1 === var2 && var2 === var3){
//     console.log("les 3 variables sont identiques");
// }else if(var1 == var2 || var1 == var3 || var2 == var3){
//     console.log("Deux des variables ont des valeurs egales");
// }else{
//     console.log("les trois  variables sont differentes");
// }


 
// console.log("********** EXECRICE 4**********************");

// let fois = prompt("donner un nombre");
// if(fois > 10){
//     console.log("Vous etes un peu trop gourmands");
// }else{
//     for(let i=1; i <= fois; i++){
//         console.log(i + " -> "+ i*2);
//     }
// }

 
console.log("********** EXECRICE 5 **********************");

let nombre = prompt("Choisissez un nombre ");
let PairOrImpair = prompt("Pair taper '0' pour impair tappez '1 ");
if(PairOrImpair == 0){
    for(let i=0; i<= nombre; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}else if(PairOrImpair == 1){
    for(let i=0; i<= nombre; i++){
        if(!( i % 2 == 0)){
            console.log(i);
        }
    }
}else{
    console.log("erreur de saisir. merci de relire les consignes !");
}
