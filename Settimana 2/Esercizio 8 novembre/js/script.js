console.log(window)
//Esercizio1
let h = window.document.getElementsByTagName('h1')
console.log(h)
const changeTitle = function () 
{
    h[0].innerText = "Titolo modificato"
}
//Esercizio 2
const addClassToTitle = function () 
{
  h[0].className ='myHeading'
}
//Esercizio 3
let pDiv = document.querySelectorAll("div > p")
console.log(pDiv)
const changePcontent = function () 
{
    for (let i=0; i<2;i++)
    {
        pDiv[i].innerText = 'Paragrafo modificato'
    }
}
//Esercizio 4
let a = document.querySelector('a')
console.log(a)
const changeUrls = function () 
{
    a[0].innerText = 'Questo link porta al sito di Google'
    a[0].href = "https://www.google.com"
}
// https://www.google.com
//Esercizio 5
const addToTheSecond = function() 
{
    let secondUl = document.getElementById("secondList");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("4th"));
    secondUl.appendChild(li);
}
//Esercizio 6
const addParagraph = function () 
{
    let divFirst = document.querySelector('div');
    let pNew = document.createElement("p");
    pNew.appendChild(document.createTextNode("Nuovo Paragrafo"));
    divFirst.appendChild(pNew);
}
//Esercizio 7
const hideFirstUl = function () 
{
    let firstUl = document.getElementById("firstList");
    firstUl.style.visibility="hidden"
}
//Esercizio 8
const paintItGreen = function ()
{
    let ulElements = document.querySelectorAll('ul');
    for(i=0;i<10;i++)
    {
        ulElements[i].style.backgroundColor="Green"
    }
}
//Esercizio 9
const makeItClickable = function () 
{
    let shortTitle=""
    arrayTitle=h[0].innerText.slice(0, -1)
    h[0].innerText = arrayTitle
}
//Esercizio 10
const revealFooterLink = function () 
{
    let UrlFooter=""
    let linkFooter = document.querySelector("footer > h3 > a")
    console.log(linkFooter)
    UrlFooter=linkFooter.href;
    alert(UrlFooter)
}