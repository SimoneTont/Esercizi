console.log(window)

let ServerURL="http://localhost:3000/users"

fetch(ServerURL, {method: "GET" /* Method della chiamata*/}).then(response => response.json()).then(json => console.log(json))

function CreateCard (obj)
{
    console.log(obj)
    console.log("ciao")
}

let obj={
  "email": "olivier@mail.com",
  "password": "bestPassw0rd",
  "firstname": "Olivier",
  "lastname": "Monge",
  "age": 32
}
fetch(ServerURL, {
    method: "POST", // Method della chiamata 
    body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
  });