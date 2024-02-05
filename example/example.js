// Функциональный подход
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello - " + this.name)
    }
}

User.prototype.exit = function(name){
    console.log(`${this.name} вышел из сети`);
}

let ivan = new User('Ivan', 25),
    Xonda = new User('Xonda', 18);

ivan.hello()
Xonda.hello()

console.log(ivan);
console.log(Xonda);

ivan.exit();
Xonda.exit()

// Классовый подход

class Odam {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greeting() {
        console.log(`Hello dears, i'm ${this.name} and i've lived on earth for ${this.age} years.`);
    }
    showGender() {
        console.log(`I could say that i'm ${this.gender}`);
    }
}

let shoh = new Odam("Shohjaxon",17,"man"),
    beha = new Odam("Behruz",18,"man"),
    odina = new Odam("Odina",21,"woman");




let dunk = () =>{
    console.log("Hello Azamat");
}

console.log(dunk)