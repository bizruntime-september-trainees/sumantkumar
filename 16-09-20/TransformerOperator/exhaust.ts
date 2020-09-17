//implemenation of rxjs exhaust operator
import { interval, of } from "rxjs";
//of is an function which take obseravle as input and output also
import { exhaust, map, take } from "rxjs/operators";
const observable = of(1, 2, 3);
//higher order observable are those obserable which  return only obserable
//take method will take first 5 number of emission here
const higherOrder = observable.pipe(map((ev) => interval(1000).pipe(take(5))));
const result = higherOrder.pipe(exhaust());
result.subscribe((x) => console.log(x));
