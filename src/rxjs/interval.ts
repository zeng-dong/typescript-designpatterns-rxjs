import { interval, take } from "rxjs";

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(7));

takeFourNumbers.subscribe((x) => console.log("Next: ", x));
