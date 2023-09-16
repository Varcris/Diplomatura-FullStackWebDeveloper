let greet: string = "Holes";
let amount: number = 123;
let isCompleted: boolean = false;
greet += " World";
amount -= 23;
isCompleted = 78 == 78;
console.log(greet, amount, isCompleted);

enum Species {
    Dog = "Dog",
    Cat = "Cat",
    Parrot = "Parrot",
    Bird = "Bird",
}

interface Pet {
    name: string;
    dob: Date;
    species: Species;
    getInfo(): any;
}

const pet01: Pet = {
    name: "Holes",
    dob: new Date(2018, 3, 13),
    species: Species.Dog,
    getInfo() {
        console.log(`
        ---------------------------
        Nombre: ${this.name}
        Fecha de Nacimiento: ${this.dob.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })}
        Especie: ${this.species}
        ---------------------------
        `);
    },
};

pet01.getInfo();


type Operation = (a: number, b: number) => number;

function calculator(num1: number, num2: number, callback: Operation): number {
    return callback(num1, num2);
}

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

console.log(calculator(3, 7, add));
console.log(calculator(3, 7, sub));
console.log(calculator(3, 7, mul));
console.log(calculator(3, 7, div));


