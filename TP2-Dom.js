// Exercice :
// 1 - Récupérer l'élément ayant pour id "main-content"
let mainElement = document.getElementById("main-content");
console.log(mainElement);
// mainElement.style.textDecoration = "underline";
console.log("1. Ok");

// 2 - Récupérer  les éléments ayant la classe "important"
let importantElements = document.getElementsByClassName("important");
console.log(importantElements);
// Array.from(importantElements).forEach(element => element.style.textDecoration = "underline");
console.log("2. Ok");

// 3 - Récupérer les élements articles
let articleElements = document.getElementsByTagName("article");
console.log(articleElements);
// Array.from(articleElements).forEach(element => element.style.textDecoration = "underline");
console.log("3. Ok");

// 4 -Récupérer  les élements "li" : Element 10, Element 11 et Element 12 en même temps
let liElements = document.querySelectorAll("div.important li");
console.log(liElements);
Array.from(liElements).forEach(element => element.style.textDecoration = "underline");
console.log("4. Ok");

// 5 - Récupérer  l'élément li : Element 4
let li4Element = document.querySelector("ul.important li");
let li4ElementBis = document.querySelectorAll("ul.important li")[0];
console.log(li4Element);
console.log(li4ElementBis);
li4Element.style.cssText = "color : yellow";
console.log("5. Ok");

// 6 - Récupérer  tous les premiers elements "li" de nos "ul" : Element 1, Element 4, Element 7, Element 10 en même temps
let liFirstElements = document.querySelectorAll("ul>li:first-child");
console.log(liFirstElements);
Array.from(liFirstElements).forEach(element => element.style.cssText = "color : blue");
console.log("6. Ok");

// 7 - Récupérer  tous les seconds elements "li" de nos "ul"
let liSecondElements = document.querySelectorAll("ul>li:nth-child(2)");
// On peut aussi obtenir les occurences impaires en passant 2n+1 a nth-child
console.log(liSecondElements);
Array.from(liSecondElements).forEach(element => element.style.cssText = "color : red");
console.log("7. Ok");

// Exercice :
// En utilisant javascript :
// - créer un nouvel élément de type paragraphe
let paragraphe = document.createElement("p");
paragraphe.setAttribute("id", "paragrapheTest")

// - ajouter le texte "Salut tout le monde !" dans ce paragraphe
paragraphe.innerHTML = "Salut tout le monde !!!";

// - créer un élément de type div ayant pour id "divJavascript"
let divJavascript = document.createElement("div");
divJavascript.setAttribute("id", "divJavascript");

// - ajouter le paragraphe créer dans la question 1 dans le div
divJavascript.appendChild(paragraphe);

// - changer le couleur du paragraphe en bleu et mettre le mot "monde" en gras
paragraphe.style.color = "blue";
paragraphe.innerHTML = "Salut tout le <strong>monde</strong> !"

// - ajouter le div dans votre body
document.body.appendChild(divJavascript);