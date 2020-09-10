/**
 * polymorphism implementation
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    eats() {
        console.log(this.name + "eat food");
    }
}
class Cat extends Animal {
    eats() {
        super.eats();
        /**
         * acces values from pareent class
         */
        console.log(this.name + "eat flesh");
    }
}

var animal = new Animal("dog");
var cat = new Cat("cat");
cat.eats();