class User 
{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let saveBtn = document.querySelector('#SaveButton');

saveBtn.addEventListener('click', () => 
{

    let f = document.querySelectorAll('#UserForm input')
    let firstName = f[0].value;
    let lastName = f[1].value;
    let age = f[2].value;

    let user = new User(firstName, lastName, age);
    localStorage.setItem("prova", JSON.stringify(user)); //JSON salva come stringa quindi lo faccio diventare stringa
    console.log(user);
    console.log(JSON.parse(localStorage.getItem("prova"))); //Torna a essere oggetto
    return user;
})

let deleteBtn = document.querySelector('#DeleteButton');

deleteBtn.addEventListener('click', () => {
    console.log(localStorage.getItem("prova"))
    localStorage.removeItem("prova")
    console.log(localStorage.getItem("prova"))
})

let c=0;
if ((sessionStorage.getItem("name"))>0)
{
    c=sessionStorage.getItem("name")
}
function Contatore ()
{
    sessionStorage.setItem("name", c);
    const p = document.querySelector("#p1");
    p.innerHTML = c
    c++;
}
Contatore();
setInterval(Contatore, 1000);

//To do list

let taskBtn = document.querySelector('#TaskButton');
//console.log(taskBtn)

taskBtn.addEventListener('click', () => 
{
    const para = document.createElement("p");
    const task = document.querySelector ("#Es3 > input").value
    //console.log(task)
    const node = document.createTextNode(task);
    para.appendChild(node);
    const element = document.getElementById("TasksDiv");
    element.appendChild(para);
    document.querySelector ("#Es3 > input").value="";
})