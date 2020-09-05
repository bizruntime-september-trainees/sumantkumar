function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;
    let calculateFinalsalary = function() {
        let finalsalary = baseSalary + monthlyBonus;
        console.log("final salary is :" + finalsalary);
    };
    this.getEmpDetails = function() {
        console.log("Name : " + this.name + "||Age: " + this.age);
        calculateFinalsalary();
    };
}
var emp1 = new Employee("sumant", 23, 3000);
emp1.getEmpDetails();