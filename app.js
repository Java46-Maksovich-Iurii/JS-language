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

const person = new Person(123, "Moshe");
person.name = "asdd1111111111111111111s";
console.log(`person is ${person}`);

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

const employee = new Employee(234, "Sarah", 5000);
console.log(`person2 is ${employee}`);
console.log(typeof(employee));
console.log(employee.constructor.name);

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

const child = new Child(345, "Jonny", "SimplDimpl");
console.log(child.toString());

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

const person4 = new wageEmployee (111, 'Assaf', 1000, 10 , 100);
console.log(`person4 is ${person4}`);

