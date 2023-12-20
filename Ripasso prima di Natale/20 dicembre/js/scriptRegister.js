console.log(window)

let ServerURL="http://localhost:3000/users"

class Item
{
    constructor(email, password, firstname, lastname, age)
    {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

let SubmitButton = document.querySelector("#SubmitButton")

let F = document.querySelectorAll("#PrimoForm .form-group input")
//Compilazione form
SubmitButton.addEventListener('click', () => {
    if (F[0].value==="")
    {
        alert("Compila tutti i campi")
    } 
    else if(F[2].value==="")
    {
        alert("Compila tutti i campi")
    }
    else if(F[3].value==="")
    {
        alert("Compila tutti i campi")
    }
    else if(F[4].value==="")
    {
        alert("Compila tutti i campi")
    }
    else
    {
        let obj= new Item (F[0].value, F[1].value, F[2].value, F[3].value, F[4].value)
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

fetch(ServerURL, {method: "GET"}).then(response => response.json()).then(json => console.log(json))

/*let obj={
  "email": "oliviera@mail.com",
  "password": "bestPassw0rd",
  "firstname": "Oliviero",
  "lastname": "Monke",
  "age": 325
}*/