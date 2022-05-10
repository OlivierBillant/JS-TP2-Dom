// Exercice :
// 1 - Récupérer l'élément ayant pour id "main-content"
let mainElement = document.getElementById("main-content");
console.log(mainElement);
mainElement.style.textDecoration = "underline";
console.log("1. Ok");

// 2 - Récupérer  les éléments ayant la classe "important"
let importantElements = document.getElementsByClassName("important");
console.log(importantElements);
Array.from(importantElements).forEach(element => element.style.textDecoration = "underline");
console.log("2. Ok");

// 3 - Récupérer les élements articles
let articleElements = document.getElementsByTagName("article");
console.log(articleElements);
Array.from(articleElements).forEach(element => element.style.textDecoration = "underline");
console.log("3. Ok");

// 4 -Récupérer  les élements "li" : Element 10, Element 11 et Element 12 en même temps
let liElements = document.querySelectorAll("div.important li");
console.log(liElements);
Array.from(liElements).forEach(element => element.style.textDecoration = "underline");
console.log("4. Ok");


// 5 - Récupérer  l'élément li : Element 4
let li4Element = document.querySelector("ul.important li");
console.log(li4Element);
Array.from(li4Element).forEach(element => element.style.cssText = "color : yellow");
console.log("5. Ok");

// 6 - Récupérer  tous les premiers elements "li" de nos "ul" : Element 1, Element 4, Element 7, Element 10 en même temps
let liFirstElements = document.querySelectorAll("ul>li:first-child");
console.log(liFirstElements);
Array.from(liFirstElements).forEach(element => element.style.cssText = "color : blue");
console.log("6. Ok");

// 7 - Récupérer  tous les seconds elements "li" de nos "ul"
let liSecondElements = document.querySelectorAll("ul>li:nth-child(2)");
console.log(liSecondElements);
Array.from(liSecondElements).forEach(element => element.style.cssText = "color : red");
console.log("7. Ok");