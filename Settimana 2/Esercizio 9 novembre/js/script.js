console.log(window)
//prompt che aggiunge paragrafo
/*const newTask = function ()
{
    let a=prompt("Add new task")
    if (a===null)
    {}
    else
    {
        let div=document.querySelector('div')
        let pNew = document.createElement("p");
        pNew.appendChild(document.createTextNode(a));
        div.appendChild(pNew);
    }
}*/

//Da campo input a pragrafo
let i=0


const submitTask = function ()
{
    //variabili
    let input=document.getElementsByTagName("input")[0].value
    let div=document.querySelector('article')
    let pNew = document.createElement("p")
    let deleteButton = document.createElement("button")
    //testo
    if (input.trim()!=="")
    {
        pNew.appendChild(document.createTextNode(input.trim()));
        deleteButton.appendChild(document.createTextNode("Delete the task above"));
        //aggiungi a pagina
        div.appendChild(pNew);
        div.appendChild(deleteButton);
        //proprietà click
        pNew.onclick =function() 
        {
            pNew.className ='Completo'
        }
        deleteButton.onclick =function() 
        {
            pNew.remove()
            deleteButton.remove()
        }
        document.getElementsByTagName("input")[0].value = ''
    }
    else{}
}
const deleteAll = function ()
{
    let AllDivP=document.querySelectorAll('article > p')
    let AllDivButtons=document.querySelectorAll('article > button')
    AllDivP.forEach(paragraph => {paragraph.remove()});
    AllDivButtons.forEach(button => {button.remove()});
}