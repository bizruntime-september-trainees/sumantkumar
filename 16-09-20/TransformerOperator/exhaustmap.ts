import { interval, of } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";
const observable = of(1, 2, 3);
const result = observable.pipe(
  exhaustMap((ev) => interval(1000).pipe(take(5)))
);
result.subscribe((x) => console.log(x));
