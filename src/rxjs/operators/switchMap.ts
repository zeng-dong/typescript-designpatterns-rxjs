// switchMap
//    turn a value into a stream
//    use that stream as the new source
//    until the original source emit another value

import {
	switchMap,
	take,
	tap,
	Observable,
	timer,
	interval,
	Observer,
	map,
	pipe,
} from "rxjs";

const character = new Observable((observer: Observer<string>) => {
	observer.next("A");
	setTimeout(() => observer.next("B"), 200);
	setTimeout(() => observer.complete(), 300);
});

const number = interval(50).pipe(take(5));
// switch to new inner observable when source emits
console.log("# switch to a new source");
// character
// 	.pipe(
// 		tap((x) => console.log(`value from source: ${x}`)),
// 		switchMap(() => number) // <-- here we subscribe to number
// 	)
// 	.subscribe(
// 		(val) => console.log(`emitted value: ${val}`),
// 		null,
// 		() => console.log("complete")
// 	);

character
	.pipe(
		tap((x) => console.log(`value from source: ${x}`)),
		switchMap(() => number) // <-- here we subscribe to number
	)
	.subscribe({
		next: (val) => console.log(`emitted value: ${val}`),
		complete: () => console.log("complete"),
	});

// Output:
// value from source: A
// emitted value: 0
// emitted value: 1
// emitted value: 2
// value from source: B
// emitted value: 0
// emitted value: 1
// emitted value: 2
// emitted value: 3
// emitted value: 4
// complete

setTimeout(() => {
	//  ^^^ just to delay this example until after the previous example
	console.log("\r\n______________________________\r\n");
	console.log("# switch and combine values from two sources");
	console.log("# A is emitted from source.  switchMap then subscribes");
	console.log("# to the timer.  Timer emits values at 0 and 150");
	console.log("# which are combined with A and emitted");
	console.log("# Source emits B at 200ms, so the timer set up by A stops,");
	console.log("# and the B value emission kicks off a new timer");
	// character
	// 	.pipe(
	// 		switchMap(
	// 			() => timer(0, 150).pipe(take(3)),
	// 			(char, num) => `${char}${num}`
	// 		)
	// 	)
	// 	.subscribe({
	// 		next: (v) => console.log(v),

	// 		complete: () => console.log("complete"),
	// 	});

	/// how to use inner map instead of result selector?

	/*
    I was using like this, obviously wrong:
    character
		.pipe(			
			switchMap(
				() =>
					timer(0, 150)
						.pipe(
							take(3)
						)
						.pipe(map((char, num) => `${char}${num}`)) // char is the value from the source? but is not.  it is the value from the inner observable?
			)
		)
		.subscribe({
			next: (v) => console.log(v),
			complete: () => console.log("complete"),
		});    
    */

	character
		.pipe(
			////tap((x) => console.log(`value from source: ${x}`)),
			switchMap(
				(x) =>
					timer(0, 150)
						.pipe(
							take(3)
							////			tap((num) => console.log(`char: ${x} `))
						)
						///.pipe(map((num) => `${num}`))
						.pipe(map((num) => `Hello ${x}${num}`)) // char is the value from the source? but is not.  it is the value from the inner observable?
			)
		)
		.subscribe({
			next: (v) => console.log(v),

			complete: () => console.log("complete"),
		});
}, 1000);

// Output:
// A0
// A1
// B0
// B1
// B2
// complete
