Class NameP{
    name;
    setName(name):void
    {
     this.name =name;
    }
}

class NameI extends NameP{
  getName():string{
    return this.name;
  }
}
let c1 = new NameI();
c1.setName("sumant");
console.log(c1.getName());
