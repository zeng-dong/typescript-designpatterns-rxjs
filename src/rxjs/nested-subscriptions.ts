import { interval } from "rxjs";

var observable1 = interval(6000);
var observable2 = interval(2000);

observable1.subscribe((ob1Val) => {
	console.log("observable1:", ob1Val);
	observable2.subscribe((ob2Val) => {
		console.log("observable2:", ob1Val, ob2Val);
	});
});
