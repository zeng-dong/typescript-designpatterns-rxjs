import { interval, map, of, switchMap } from "rxjs";

var users$ = of("John", "Mike", "Bob", "Jane", "Kate");
var ratins$ = interval(2000); //of(1, 2, 3, 4, 5);

users$.subscribe((user) => {
	console.log("user:", user);
	ratins$.subscribe((rating) => {
		console.log("rating:", user, rating);
	});
});

/*
what's exactly happening here is that a new subscription of "observable2" is created for each emitted value of "observable1" 
and all these subsciptions of "observable2" are running in parallel to each other and that's why we got the output as we see.*/

//  RxJS operators to the rescue

// to avoid such a situation we should use appropriate RxJS operator instead of nested subscriptions.
// The operator to go for in our current situation is the switchMap operator
// users$
// 	.pipe(
// 		switchMap((user) => {
// 			console.log("user:", user);
// 			return ratins$.pipe(map((rating) => [user, rating]));
// 		})
// 	)
// 	.subscribe((mappedVal) => {
// 		console.log("rating:", mappedVal[0], mappedVal[1]);
// 	});
