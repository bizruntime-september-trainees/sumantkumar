/**
 * this function will accept details about a program
 * and create an object for them
 *
 * @param {string} name the person full name
 * @param {number} age the person age
 * @param {boolean} isDeveloper whether or not perosn is developer
 * @returns {object} the person object
 */

function createperson(name, age, isdeveloper) {
    return {
        name: name,
        age: age,
        isDeveloper: isdeveloper,
    };
}
class person {
    /**
     * this function will accept details about a program
     * and create an object for them
     *
     * @param {string} name the person full name
     * @param {number} age the person age
     * @param {boolean} isDeveloper whether or not perosn is developer
     * @returns {object} the person object
     */

    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
}
/**
 * output details of the person
 * param {person} person
 */
function printDetails(person) {
    console.log(
        "${person.name} is ${perosn.age} year old is ${person.isDeveloper}"
    );
}

/**
 * get your number
 *@returns{number[]}
 */
function getNumbers() {
    return [10, 80, 130, 150];
}
const Numbers = getNumbers();