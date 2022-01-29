// const person1 = {
//     id: 123,
//     name: 'Moshe',
//     address: {
//         city: 'Lod',
//         street: 'Sokolov'
//     }
// }
// const person2 = {
//     id: 123,
//     name: 'Moshe',
//     address: {
//         city: 'Lod',
//         street: 'Sokolov'
//     }
// }
// console.log(person1 == person2);    //false
// const person3 = person1;
// console.log(person1 == person3);    //true
// console.log(person1 === person3);   //true
// console.log(`JSON.stringify(person1) === JSON.stringify(person1) is ${JSON.stringify(person1) === JSON.stringify(person2)}`);
// console.log(JSON.stringify(person1));
// console.log(person1.toString());
// console.log(person1.name);
// console.log(person1.address.city);
// Object.keys(person1).forEach(k => console.log(k)); //array of object keys
// Object.values(person1).forEach(v => console.log(v)); //array of object values
// Object.entries(person1).forEach(e => console.log(e)); // array of arrays - [key, value]

// function createAddress(city, street) {
//     // return {city: city, street: street};
//     return {city, street};
// }
// function createPerson(id, name, adress) {
//     return {id, name, address};
// }

// const persons = [
//     createPerson(234, "Vasya", createAddress("Rehovot", "Parshani")),
//     createPerson(345, "Olya", createAddress("Rehovot", "Prof. Plaut")),
//     createPerson(456, "Tolya", createAddress("Tel-Aviv", "Disengoff")),
// ];


const arrayString = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];

function displayOccurrences(array) {
    const res = {};
    for (let i = 0; i < array.length; i++) {
        if (res[array[i]] === undefined) {
            res[array[i]] = 1;
        } else {
            res[array[i]] =  res[array[i]] + 1;
        }
    }
    // console.log(res);
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));

}

// displayOccurrences(arrayString);


function displayOccurrences2(array) {
    const res = createObj(array);

    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));    

}

function createObj (array) {
    return array.reduce((result, element) => { result[element] = result[element] === undefined ? 1 : result[element] + 1; return result}, {});
}


displayOccurrences2(arrayString);