import { of } from "rxjs";
//of is an function which take obseravle as input and output also
import { expand, delay, take } from "rxjs/operators";
const powersOfTwo = of(1, 2, 3).pipe(
  expand((x) => of(x).pipe(delay(1000))),
  take(10)
);
powersOfTwo.subscribe((x) => console.log(x));
