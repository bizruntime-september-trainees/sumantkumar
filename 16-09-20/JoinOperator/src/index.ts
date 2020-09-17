import { of, race } from "rxjs";
import { concat } from "rxjs/operators";

let list1 = of(2, 3, 4, 5, 6);
//of operator take obserable as input
let list2 = of(4, 9, 16, 25, 36);
//of operator take obserable as input
let final_val = race(list1, list2);
final_val.subscribe((x) => console.log(x));
