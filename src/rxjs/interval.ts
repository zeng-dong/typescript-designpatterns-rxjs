import { interval, map, take } from "rxjs";

// const numbers = interval(1000);

// const takeFourNumbers = numbers.pipe(take(7));

// takeFourNumbers.subscribe((x) => console.log("Next: ", x));

let next = 200;
interval(1000)
	.pipe(
		map(() => {
			next = next + Math.floor(Math.random() * 5);
			return next > 250 ? 222 : next;
		})
	)
	.subscribe((v) => console.log(v));
