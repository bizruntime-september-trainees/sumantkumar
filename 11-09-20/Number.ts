var global_num = 12; //global variable declaration
class Numbers {
  num_val = 13; //class variable declaration
  static sval = 10; //static field

  storeNum(): void {
    var local_num = 14; //local variable declaration
  }
}
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
