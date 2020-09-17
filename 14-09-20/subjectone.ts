//implememation of subject as obserable
import { Subject } from "rxjs";

const subject = new Subject<number>();
//subject is treated ad obserable
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});
//here subject gives a obserser which emit the values
subject.next(1);
subject.next(2);
