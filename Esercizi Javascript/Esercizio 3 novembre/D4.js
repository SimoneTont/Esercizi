/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let l1=7;
let l2=10;
function area (l1,l2)
{
    return l1*l2;
}
console.log(area (l1,l2))
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=5;
let num2=15;
function crazySum(num1,num2)
{
    if (num1===num2)
    {
        return (num1+num2)*3
    }
    else
    {
        return (num1+num2)
    }
}
console.log(crazySum(num1,num2))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=5;
function crazyDiff(num1)
{
    if (num1>19)
    {
        return (num1-19)*3
    }
    else
    {
        return (num1-19)*(-1)
    }
}
console.log(crazyDiff(num1))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n =27;
function boundary ()
{
    if (Math.floor(n)===n)
    {
        if (n===400 || (n>20 && n<100))
        {
            return "true";
        }
        else
        {
            return "false";
        }
    }
    else
    {
        return "Errore, inserisci un numero intero"
    }
}
console.log(boundary(n))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
message="Hello World";
let firstword = message.split(' ')[0]
function epify (message)
{
    if (firstword==="EPICODE")
    {
        return message;
    }
    else
    {
        return "EPICODE " + message;
    }
}
console.log(epify(message));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=9;
function check3and7 (numq)
{
    if (num1<=0)
    {
        return "Errore: Inserisci un numero positivo"
    }
    else if(num1%3===0)
    {
        return "Multiplo di 3"
    }
    else if(num1%7===0)
    {
        return "Multiplo di 7"
    }
    else
    {
        return "Non è un multiplo di 3 o 7"
    }
}
console.log(check3and7(num1));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
message="Hello World";
let reverse = "";
function reverseString(message)
{
    for(let i = 0; i < message.length; i++)
    {
        reverse= message[i] + reverse 
    }
    return reverse
}
console.log(reverseString(message));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
message="hello world";
let newMessage="";
let maiuscola="";
function UpperFirst(message)
{
    for(let i = 0; i < message.length; i++)
    {
        if(i===0)
        {
            maiuscola=message.slice(0,1);
            maiuscola=maiuscola.toUpperCase();
            newMessage=newMessage+maiuscola;
        }
        else if (message[(i-1)]===" ")
        {
            maiuscola=message.slice(i,(i+1));
            maiuscola=maiuscola.toUpperCase();
            newMessage=newMessage+maiuscola;
        }
        else
        {
            newMessage=newMessage+message[i];
        }
    }
    return newMessage;
}
console.log(UpperFirst(message));

/* ESERCIZIO 9

 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
message="Hello World";
newMessage="";
function cutString(message)
{
    for(i = 1; i < (message.length-1); i++)
    {
        newMessage=newMessage+ message[i]
    }
    return newMessage
}
console.log(cutString(message));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n=5;
arr=[];
let casuale=0;
function giveMeRandom (n)
{
    {
        for(i = 0; i < n; i++)
        {
            casuale=Math.random()*10;
            arr.push(casuale);
        }
        return arr
    }
}
console.log(giveMeRandom(n));