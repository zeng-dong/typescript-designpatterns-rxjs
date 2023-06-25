import { zip, interval, of, map, publish, merge, tap } from "rxjs";

const source$ = zip(interval(2000), of(1, 2, 3, 4, 5, 6, 7, 8, 9)).pipe(
	map(([, number]) => number)
);

source$
	.pipe(
		publish((multicasted$) =>
			merge(
				multicasted$.pipe(tap((x) => console.log("Stream 1:", x))),
				multicasted$.pipe(tap((x) => console.log("Stream 2:", x))),
				multicasted$.pipe(tap((x) => console.log("Stream 3:", x)))
			)
		)
	)
	.subscribe();
