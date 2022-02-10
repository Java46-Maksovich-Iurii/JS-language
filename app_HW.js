class Person {
   #id;
   #name;
   constructor(id, name) {
       this.#id = id;
       this.#name = name;
   }
   getID() {
       return this.#id;
   }
   getName() {
       return this.#name;
   }
   toString() {
       return `id: ${this.#id}; name: ${this.#name};`;
   }
}

class Employee extends Person {
   #salary;
   constructor(id, name, salary) {
       super(id, name);  // call constructor of Person
       this.#salary = salary;
   }
   computeSalary() {
       return this.#salary;
   }
   toString() {
       return super.toString() + ` salary: ${this.computeSalary()}`
   }
}

class Child extends Person {
   #kinderGarten
   constructor(id, name, kinderGarten) {
       super(id, name);
       this.#kinderGarten = kinderGarten;
   }
   getKinderGarten() {
       return this.#kinderGarten;
   }
   toString() {
       return super.toString() + ` kinderGarten name is ${this.#kinderGarten}`
   }
}

class wageEmployee extends Employee {
   #wage
   #hours
   constructor(id, name, salary, hours, wage){
     super(id, name, salary);
     this.#hours = hours;
     this.#wage = wage; 
   }
   computeSalary() {
       return super.computeSalary() + this.#hours * this.#wage;
   }
}

const persons = [
   new Child(100, 'Olya', 'Shalom'),
   new Child(101, 'Sergey', 'Boker'),
   new Child(102, 'Kolya', 'Shalom'),
   new Employee(103, 'Vasya', 1000),
   new wageEmployee(104, 'Tolya', 1000, 10, 100)
]

function countOfPersonType(persons, type) {
   return resArray = persons.filter(el => el.constructor.name === type ).length
}

// const countPT = countOfPersonType(persons, 'Child');
// console.log(countPT)

// function computeSalaryBudget(persons) {
//    return persons.reduce((res, cur) => res += cur.computeSalary ? cur.computeSalary() : 0 , 0);
// }

// const computeSB = computeSalaryBudget(persons);
// console.log(computeSB);

// function countChildrenKindergarten(persons, kinderGartenName) {
//    return persons.filter(el => el.getKinderGarten && el.getKinderGarten() === kinderGartenName ).length
// }

// const countCK = countChildrenKindergarten(persons, 'Shalom');
// console.log(countCK);

const person4 = new wageEmployee (111, 'Assaf', 1000, 10 , 100);
console.log(`person4 is ${person4}`);

function testOutput(fun, expected) {
    console.log (`function ${fun.name}; expected result: ${expected}; actual result ${fun()}`)
}

function computeSalaryBudget(persons) {
    const allEmployees = persons.filter(el => !!el.computeSalary);
    const salaryValues = allEmployees.map(el => el.computeSalary());
    return salaryValues.reduce((res, cur) => res+cur);
}

testOutput(computeSalaryBudget.bind(undefined, persons), 3000);
testOutput(countOfPersonType.bind(undefined, persons, 'Child'), 3);