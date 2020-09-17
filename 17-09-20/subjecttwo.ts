//implememation of subject as observer
import { Subject, from } from "rxjs";

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});
// here subject is treated as observer
const observable = from([1, 2, 3]);
//here from is used to send in the form of sequence of charaecter,number,string
// also from is used to convert promise into obseravble

observable.subscribe(subject); // You can subscribe providing a Subject
