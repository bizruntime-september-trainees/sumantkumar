//class in javascript
class User {
    constructor(email, name) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(this.email, "just user signed in");
    }
    logout() {
        console.log(this.email, "just user is logged out");
    }
}
//object in javascript
var userOne = new User("sumantkumar735568@gmail.com", "sumant");
var userTwo = new User("sanukuamr26@gmail.com", "sanu");
userOne.login();
userTwo.logout();