console.log(window)
let numero=46
const TableTombola = function()
{
    //variabili
    let article = document.getElementsByTagName("article")[0];
    let table = document.createElement("table")
    let n=1;
    console.log(table)
    //numero =prompt("Inserisci il numero massimo da estrarre")
    //creazione righe e colonne
    for(let i = 1; i < (numero+1); i++)
    {
        let tr = table.insertRow();
        for (let c=1;c<10;c++)
        {
            if (n<=numero)
            {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(n));
                n++
            }     
        }
    }    
    article.appendChild(table);
    return numero;
}
TableTombola()
//funzione estrazione
let estratti=[]
let ripeto=false
let n=0
const estrazione = function ()
{
    n++//contatore numeri estratti
    let td = document.querySelectorAll("td");
    if (n>numero) //failsafe
    {
        let fine="Tutti i numeri sono stati estratti"
        console.log(fine)
    }
    else
    {
        casuale=Math.ceil(Math.random()*(numero));//creo numero casuale tra 0 e max
        ripeto=estratti.includes(casuale)//controllo se già uscito
        while (ripeto===true)//se già uscito, ripeti
        {
            casuale=Math.ceil(Math.random()*(numero));
            ripeto=estratti.includes(casuale)
        }
        estratti.push(casuale)//aggiungi agli estratti
        console.log(estratti)
        //verifica corrispondenza in tabella
        td.forEach(element => 
        {
            if (element.innerText==casuale)
            {
                element.className ='estratto' //segna come estratto
            }
        })
    }
    let p=document.querySelector("p");
    p.innerText="È uscito il numero "+casuale
}
const TableGiocatore = function()
{

    p.innerText="È uscito il numero "+casuale
    numero=24
    //variabili
    let article = document.getElementsByTagName("article")[0];
    let table = document.createElement("table")
    let n=1;
    console.log(table)
    //numero =prompt("Inserisci il numero massimo da estrarre")
    //creazione righe e colonne
    for(let i = 1; i < (numero+1); i++)
    {
        let tr = table.insertRow();
        for (let c=1;c<6;c++)
        {
            if (n<=numero)
            {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(n));
                n++
            }     
        }
    }    
    article.appendChild(table);
    return numero;
}
TableGiocatore()