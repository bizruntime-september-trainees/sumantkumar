import { Observable } from "rxjs/Observable";
var observable = Observable.create((observer: any) => {
  try {
    observer.next("Hey guys!");
    observer.next("How are you?");
    setInterval(() => {
      observer.next("I am good");
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
});

observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

//setTimeout(() => {
// observer.unsubscribe();
//}, 6001);
//function to add element to front end
function addItem(val: any) {
  //create element is present inside dom to create new element
  var node = document.createElement("li");
  //createTextNode is used to create new textnode
  var textnode = document.createTextNode(val);
  //appendchild method add new textnode to existing one
  node.appendChild(textnode);
  //appendchild method add content to main page
  document.getElementById("output").appendChild(node);
}
