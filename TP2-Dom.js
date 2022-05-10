// Exercice :
// 1 - Récupérer l'élément ayant pour id "main-content"
let mainElement = document.getElementById("main-content");
console.log(mainElement);
console.log("Ok");

// 2 - Récupérer  les éléments ayant la classe "important"
let importantElements = document.getElementsByClassName("important");
console.log(importantElements);
console.log("Ok");

// 3 - Récupérer les élements articles
let articleElements = document.getElementsByTagName("article");
console.log(articleElements);
console.log("Ok");

// 4 -Récupérer  les élements "li" : Element 10, Element 11 et Element 12 en même temps
let liElements = document.querySelectorAll("div.important li");
console.log(liElements);
console.log("Ok");


// 5 - Récupérer  l'élément li : Element 4
let li4Element = document.querySelector("ul.important li");
console.log(li4Element);
console.log("Ok");

// 6 - Récupérer  tous les premiers elements "li" de nos "ul" : Element 1, Element 4, Element 7, Element 10 en même temps
let liFirstElements = document.querySelectorAll("ul>li:first-child");
console.log(liFirstElements);
console.log("Ok");
