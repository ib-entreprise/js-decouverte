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

 
// console.log("********** EXECRICE 5 **********************");
// let nombre = prompt("Choisissez un nombre ");
// let PairOrImpair =   prompt("Pair taper '0' pour impair tappez '1 ");
// if(PairOrImpair == 0 || PairOrImpair == 1){
//     // console.log(PairOrImpair);
//     for(let i=PairOrImpair; i<= nombre; i+=2){            
//         console.log(i);
//     }
// }
   

// console.log("********** EXECRICE 6 **********************");
// let nmbrePiramid = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
// nmbrePiramid= parseInt(nmbrePiramid);

// showPiramid(nmbrePiramid);
// function showPiramid(nmbrePiramid){
//     for(let i =1; i<= nmbrePiramid; i++){     
//             start = '*';
//             result = start.repeat(i);
//             space =' ';
//             let totalspace = space.repeat(nmbrePiramid - i);
//             console.log(totalspace, result);     
//     }
// }


// console.log("********** EXECRICE 7 **********************");

// let aniversaire = prompt("votre jour de naissance"); 


//   function getPromotion(aniversaire){
//     const date = new Date();
//     let moisEnCours = date.getMonth() + 1; 
//     if(moisEnCours <10){
//         moisEnCours = "0" + moisEnCours;
//     }
//     let moisAniversaire = (aniversaire.charAt(3)+ aniversaire.charAt(4));
//     (moisAniversaire == moisEnCours) ? console.log("joyeux aniversaire ! tu obtiens une prom de 30 % sur tous les articles" ) :
//     console.log("En ce moment, unepromo de 15% sur tous les articles");

//   }
//  getPromotion(aniversaire);

// console.log("********** EXECRICE 8 **********************");
// let chooseNumber = prompt("De quel nombre veux-tu calculer le factoriel");
// function fact(chooseNumber){
//     if(chooseNumber < 0){
//         return "impossible";
//     }else if(chooseNumber === 0 || chooseNumber ===1){
//         return 1
//     }else{
//         let result =1;
//         for (let i = 2; i <= chooseNumber; i++) {
//             result *= i;
//         }
//         return result
//     }
// }
// console.log(fact(chooseNumber));
// console.log(fact(4));
// console.log(fact(6));
// console.log(fact(8));
// console.log(fact(2));
// console.log(fact(1));

// console.log("********** EXECRICE 9 **********************");
// let chaine  = prompt("donnez votre chaine de caractere");
// function removeFirstAndLastCaracter(chaine){
//    let newChaine = chaine.slice(1);
//    let chaine2 = newChaine.slice(0,-1);
//     return chaine2;
// }

// console.log(removeFirstAndLastCaracter(chaine));



// const entrepreneurs = [
//     { first: 'Steve', last: 'Jobs', year: 1955 },
//     { first: 'Oprah', last: 'Winfrey', year: 1954 },
//     { first: 'Bill', last: 'Gates', year: 1955 },
//     { first: 'Sheryl', last: 'Sandberg', year: 1969 },
//     { first: 'Mark', last: 'Zuckerberg', year: 1984 },
//     { first: 'Beyonce', last: 'Knowles', year: 1981 },
//     { first: 'Jeff', last: 'Bezos', year: 1964 },
//     { first: 'Diane', last: 'Hendricks', year: 1947 },
//     { first: 'Elon', last: 'Musk', year: 1971 },
//     { first: 'Marissa', last: 'Mayer', year: 1975 },
//     { first: 'Walt', last: 'Disney', year: 1901 },
//     { first: 'Larry', last: 'Page', year: 1973 },
//     { first: 'Jack', last: 'Dorsey', year: 1976 },
//     { first: 'Evan', last: 'Spiegel', year: 1990 },
//     { first: 'Brian', last: 'Chesky', year: 1981 },
//     { first: 'Travis', last: 'Kalanick', year: 1976 },
//     { first: 'Marc', last: 'Andreessen', year: 1971 },
//     { first: 'Peter', last: 'Thiel', year: 1967 }
//   ];

//   entrepreneurs.forEach(item =>{
//      if(item.year >= 1970 && item.year < 1980){
//         // console.log(item);
//      }
//     //  console.log(item.first +" "+ item.last);

//      console.log( Date()  );
//   });
  


// DOM


// ********** exo 1 **********
let originalText = document.querySelector('.originalText');
// console.log(originalText);
let copiedText = document.querySelector('.copiedText');
originalText.addEventListener("keyup", (e)=>{
   copiedText.value=originalText.value;
});

// ********** exo 2 **********
 const exo2 = document.querySelector('#exo2');
 let number = exo2.querySelector('.number');

 let nombre = exo2.querySelector('#nombre');
 let carre = exo2.querySelector('#carre');
 let cube = exo2.querySelector('#cube');
 number.addEventListener("keyup",(e)=>{
   nombre.textContent = number.value; 
      carre.textContent = Math.pow( number.value,2);      
      cube.textContent = Math.pow( number.value,3);         
 });
 