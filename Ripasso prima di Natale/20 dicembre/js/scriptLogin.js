addEventListener("DOMContentLoaded", () => { fetch(ServerURL, {method: "GET"}).then(response => response.json()).then(json => CheckArray(json))});

let controlArr=[]

function CheckArray(arrObj)
{
    arrObj.forEach(element => {
        controlArr.push(element)
    });
    console.log(controlArr)
}


class Item
{
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }
}

let ServerURL="http://localhost:3000/users"

let SubmitButton = document.querySelector("#SubmitButton")

let F = document.querySelectorAll("#PrimoForm .form-group input")
//Compilazione form
SubmitButton.addEventListener('click', () => {
    if (F[0].value==="")
    {
        alert("Compila tutti i campi")
    } 
    else if(F[1].value==="")
    {
        alert("Compila tutti i campi")
    }
    else
    {
        let obj= new Item (F[0].value, F[1].value)
        console.log(obj)

        fetch(ServerURL, {
            method: "POST", // Method della chiamata 
            body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
          });
    }
})

/*
function CheckFunc (arrObj,loginObj)
{
    let c=0;
    arrObj.forEach(element => {
        console.log(element)
        if(element.email===loginObj.email)
        {
            c++
        }
        if(element.password===loginObj.password)
        {
            c++
        }
    });
    if (c<2)
    {
        alert("email o password errata")
    }
    console.log(c)
    console.log(arrObj)
}
*/