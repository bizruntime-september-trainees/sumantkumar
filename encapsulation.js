class Employee {
    setEmpDetails(name, id, phoneNo) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    getEmpName() {
        return this.name;
    }
    getEmpId() {
        return this.id;
    }
    getEmpPhone() {
        return this.phoneNo;
    }
}
var emp1 = new Employee();
emp1.setEmpDetails("sumant", 101, 7355689989);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhone());