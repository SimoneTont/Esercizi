//Parte 1

let risultato;

class User 
{
    constructor(firstName, lastName, age, location)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontoEta(persona) 
    {
        if(this.age > persona.age) 
        {
            risultato= this.firstName + ' è più vecchio di ' + persona.firstName;
        } 
        else 
        {
            if(this.age < persona.age) 
            {
                risultato= persona.firstName + ' è più vecchio di ' + this.firstName;
            } 
            else 
            {
                risultato= persona.firstName + ' ha la stessa età di ' + this.firstName;
            }
        }
        
        return risultato;
    }
}

let mario = new User('Mario', 'Rossi',33, 'Roma');
let giuseppe = new User('Giuseppe', 'Verdi', 31, 'Milano');
let francesca = new User('Francesca', 'Neri', 29, 'Napoli');

console.log(mario.confrontoEta(giuseppe));
console.log(francesca.confrontoEta(mario));
console.log(giuseppe.confrontoEta(francesca));

// Parte 2

class Pet 
{
    static count = 0;
    constructor(petName, ownerName, species, breed)
    {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        Pet.count++;
    }
    ownerNameTest(pet) 
    {
        if(pet.ownerName === this.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}