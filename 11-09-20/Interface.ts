//implemenation of interface for Iperson class
//interface  name and datatype should be same;
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "sumant",
  lastName: "kumar",
  sayHi: (): string => {
    return "Hi sumant";
  },
};

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: "ravi",
  lastName: "yadav",
  sayHi: (): string => {
    return "Hello!!!";
  },
};

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
