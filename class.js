class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        return `${this.name} says hello.`;
    }
}

class Heroine extends Hero {
    constructor(name, level, heroine) {

        super(name, level);
        this.heroine = heroine;
    }
}
var n = new Heroine('Lohith', 'Top', 'Sairah')
console.log(n)