import { interval, map, switchMap } from "rxjs";

var observable1 = interval(6000);
var observable2 = interval(2000);

observable1.subscribe((ob1Val) => {
	console.log("observable1:", ob1Val);
	observable2.subscribe((ob2Val) => {
		console.log("observable2:", ob1Val, ob2Val);
	});
});

/*
what's exactly happening here is that a new subscription of "observable2" is created for each emitted value of "observable1" 
and all these subsciptions of "observable2" are running in parallel to each other and that's why we got the output as we see.*/

//  RxJS operators to the rescue

// to avoid such a situation we should use appropriate RxJS operator instead of nested subscriptions.
// The operator to go for in our current situation is the switchMap operator
// observable1
// 	.pipe(
// 		switchMap((ob1Val) => {
// 			console.log("observable1:", ob1Val);
// 			return observable2.pipe(map((ob2Val) => [ob1Val, ob2Val]));
// 		})
// 	)
// 	.subscribe((mappedVal) => {
// 		console.log("observable2:", mappedVal[0], mappedVal[1]);
// 	});
