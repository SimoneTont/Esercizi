import React from 'react';

const users = [
    { id: 1, name: 'John', lastName: 'Smith', city: 'San Francisco', source: 'https://cdn.britannica.com/81/82281-050-3ADDC3DB/John-Smith-engraving.jpg' },
    { id: 2, name: 'Mario', lastName: 'Rossi', city: 'Roma', source: 'https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png' },
    { id: 3, name: 'Jane', lastName: 'Smith', city: 'London', source: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Jane-Smith.Mr-and-Mrs-Smith.webp' }
]

let selection= Number(prompt("Please input a number from 1 to 3"));


if (selection<1||selection>3)
{
    alert("Errore")
}
selection=selection - 1
function Avatar({ person }) {
    return (

        <img
            className="avatar"
            src={person.source}
            alt={person.name}
            width={200}
            height={200}
        />
    );
}

export default function ImageComp() {
    return (
        <Avatar
            person={users[selection]}
        />
    )
}