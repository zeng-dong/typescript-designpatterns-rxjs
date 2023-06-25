import { count, of, startWith } from "rxjs";

of(1, 2, 3).pipe(count()).subscribe(console.log);
of(1, 2, 3)
	.pipe(count((x) => x % 2 === 0))
	.subscribe(console.log);
//of(1, 2, 3).pipe(count((x) => x % 2 === 0, { startWith: 10 })).subscribe(console.log);

of(1, 2, 3)
	.pipe(count())
	.subscribe({
		next: (val) => console.log(val * 100),
		error: (err) => console.log(err),
		complete: () => console.log("complete"),
	});
