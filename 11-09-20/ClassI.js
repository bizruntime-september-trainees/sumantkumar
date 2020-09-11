var ClassI = /** @class */ (function () {
    //constructor
    function ClassI(engine) {
        this.engine = engine;
    }
    //function
    ClassI.prototype.disp = function () {
        console.log("Function displays Engine is  :   " + this.engine);
    };
    return ClassI;
}());
//create an object
var obj = new ClassI("Tata engine");
//access the function
obj.disp();
