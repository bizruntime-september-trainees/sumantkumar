var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Class;
NameP;
{
    name;
    setName(name);
    void {
        "this": .name = name
    };
}
var NameI = /** @class */ (function (_super) {
    __extends(NameI, _super);
    function NameI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NameI.prototype.getName = function () {
        return this.name;
    };
    return NameI;
}(NameP));
var c1 = new NameI();
c1.setName("sumant");
console.log(c1.getName());
