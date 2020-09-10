/*method chaining implementation*/
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
/*object creation n javascript */
var userOne = new User("sumantkumar735568@gmail.com", "sumant");
var userTwo = new User("sanukuamr26@gmail.com", "sanu");
/*method chaining in javascript */
userOne.login().updateScore().updateScore().logout();