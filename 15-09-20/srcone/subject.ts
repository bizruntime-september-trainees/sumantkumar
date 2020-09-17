import { Subject } from "rxjs/Subject";

var subject = new Subject();

// Our handy function for showing the values:
// We will use this shortly...
subject.subscribe(
  (data) => addItem("Observer 1: " + data),
  (err) => addItem(err),
  () => addItem("Observer 1 Completed")
);

subject.next("The first thing has been sent");

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
