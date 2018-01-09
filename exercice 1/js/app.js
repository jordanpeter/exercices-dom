// Exo 1

var classDel = document.querySelector("body"); // Oublie pas de sélectionner le conteneur via le querySelector si tu veux intervenir sur les classes de body.
classDel.classList.remove("bg-aqua");
classDel.classList.add("bg-olive");

var para = document.querySelector("p"); // Selectionne le premier 'p'
para.classList.remove("bg-lime", "gray") // Possibilité évidente de supprimer plusieurs classes
para.classList.add("aqua");
console.log(para);

var bgSilver = document.getElementsByClassName("bg-silver");
for (var i = 0; i < bgSilver.length; i++){
     bgSilver[i].classList.add("bg-teal");
     bgSilver[i].classList.remove("bg-silver");
      // Quand tu dois supprimer une classe via un getElementsByClassName tu dois considérer que le résultat est dans un tableau.
}
console.log(bgSilver);

var quote = document.getElementsByTagName("blockquote")[0]; //QUAND CEST DU TAG NAME IL FAUT DEFINIR LA VALEUR 0 DU PUTAIN DE TABLEAU (si c'est un tableau qui est retourné en général en fait)
quote.classList.add("bg-white");
console.log(quote);

// Exo 2

var tabel = document.querySelector("table"); //selectionne le 1er tableau
tabel.classList.add('bg-purple')
console.log(tabel);

var modif = document.querySelectorAll("main")[0];
modif.classList.add("shadow");
console.log(modif);

// Exo 3

var erp = document.getElementsByTagName("pre")[0];
erp.style.color= "white";
erp.style.backgroundColor= "blue";
erp.style.borderTop ="3px solid red";
erp.style.borderTop ="3px solid red";
console.log(erp);
