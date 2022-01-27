const person1 = {
    id: 123,
    name: 'Moshe',
    address: {
        city: 'Lod',
        street: 'Sokolov'
    }
}
const person2 = {
    id: 123,
    name: 'Moshe',
    address: {
        city: 'Lod',
        street: 'Sokolov'
    }
}
console.log(person1 == person2);    //false
const person3 = person1;
console.log(person1 == person3);    //true
console.log(person1 === person3);   //true
console.log(`JSON.stringify(person1) === JSON.stringify(person1) is ${JSON.stringify(person1) === JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(person1.toString());
console.log(person1.name);
console.log(person1.address.city);
Object.keys(person1).forEach(k => console.log(k)); //array of object keys
Object.values(person1).forEach(v => console.log(v)); //array of object values
Object.entries(person1).forEach(e => console.log(e)); // array of arrays - [key, value]

function createAddress(city, street) {
    // return {city: city, street: street};
    return {city, street};
}
function createPerson(id, name, adress) {
    return {id, name, address};
}

const persons = [
    createPerson(234, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(345, "Olya", createAddress("Rehovot", "Prof. Plaut")),
    createPerson(456, "Tolya", createAddress("Tel-Aviv", "Disengoff")),
];