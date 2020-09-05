/**
 * cimplementaion of inheritance in javascript
 */
class User {
    /*constructor */
    constructor(email, name) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(this.email, "just user signed in");
        return this;
    }
    logout() {
        console.log(this.email, "just user is logged out");
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}
class Admin extends User {
    deleteUser(user) {
        /**
         *here filter is use to access element one by one
         */
        users = users.filter((u) => {
            return u.email != user.email;
        });
    }
}

var userOne = new User("sumantkumar735568@gmail.com", "sumant");
var userTwo = new User("sanukuamr26@gmail.com", "sanu");
var admin = new Admin("pushkar23@gmail.com", "pushkar");
var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);
console.log(users);