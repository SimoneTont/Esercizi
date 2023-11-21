/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 7;
let risultato = undefined;
if (num1 === num2)
{
  risultato="I numeri sono uguali";
}
else
{
  if (num1 > num2)
  {
    risultato="Il primo numero è maggiore";
  }
  else
  {
    risultato="Il secondo numero è maggiore";
  }
}
console.log(risultato);
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1 = 5;
if (num1 === 5)
{
  risultato="Equal to 5";
}
else
{
  risultato="Not equal to 5";
}
console.log(risultato);
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=8;
if (num1%5 === 0)
{
  risultato="Divisibile per 5";
}
else
{
  risultato="Non divisibile per 5";
}
console.log(risultato);
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* ESERCIZIO 4
/* SCRIVI QUI LA TUA RISPOSTA */
num1 = 4;
num2 = 4;
if ((num1-num2) === 8 || (num1+num2) === 8||(num1 === 8 || num2 === 8))
{
  risultato="True";
}
else
{
  risultato="false";
}
console.log(risultato);
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart=45;
if (totalShoppingCart < 50)
{
  totalShoppingCart=totalShoppingCart+10;
}
else
{}
risultato= "L'addebito sarà di " + totalShoppingCart + " euro";
console.log(risultato);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart=80;
totalShoppingCart=totalShoppingCart*0.8;
if (totalShoppingCart < 50)
{
  totalShoppingCart=totalShoppingCart+10;
}
else
{}
risultato= "L'addebito sarà di " + totalShoppingCart + " euro";
console.log(risultato);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=7;
num2=5;
num3=3;
if (num1 >= num2)
{
  if (num1 >= num3)
  {
    if (num2 >= num3)
    {
      risultato= "Dal maggiore al minore: "+num1+" "+num2+" "+num3;
    }
    else
    {
      risultato= "Dal maggiore al minore: "+num1+" "+num3+" "+num2;
    }
  }
  else
  {
    risultato= "Dal maggiore al minore: "+num3+" "+num1+" "+num2;
  }
}
else
{
  2>1
  if (num2>=num3)
  {
    if (num3>=num1)
    {
      risultato= "Dal maggiore al minore: "+num2+" "+num3+" "+num1;
    }
    else
    {
      risultato= "Dal maggiore al minore: "+num2+" "+num1+" "+num3;
    }
  }
  else
  {
    risultato= "Dal maggiore al minore: "+num3+" "+num2+" "+num1;
  }
}
console.log(risultato);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerostringa = 12;
if (typeof numerostringa==="number")
{
  risultato= "Numero"
}
else
{
  risultato= "Non numero"
}
console.log(risultato);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1=5;
if (num1%2 === 0)
{
  risultato="Pari";
}
else
{
  risultato="Dispari";
}
console.log(risultato);
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3;
  if (val < 10 && val >= 5) 
  {
    console.log("Meno di 10");
  } 
  else if (val < 5) 
  {
    console.log("Meno di 5");
  } 
  else 
  {
    console.log("Uguale a 10 o maggiore");
  }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let decina=[];
decina.unshift(1,2,3,4,5,6,7,8,9,10)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
decina[9]=100;
console.log(decina);