//implementaion of rxjs concatmapTo operatot in Transformation operator
import { fromEvent, interval } from "rxjs";
import { take, concatMapTo } from "rxjs/operators";
const clicks = fromEvent(document, "click");
//pipe method takes input from one observable and return the obserable into output
//take method will take first 5 number of emission here
const result = clicks.pipe(concatMapTo(interval(1000).pipe(take(5))));
result.subscribe((x) => console.log(x));
