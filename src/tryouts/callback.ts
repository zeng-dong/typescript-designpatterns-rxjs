function foo(boo: (s: string) => void) {
	return boo("I am the callback");
}

foo(function (a: string): void {
	console.log(a);
});

const another = function (myString: string): void {
	console.log("I am the callback gets passed in to foo");
};
foo(another);

function far(callback: () => string): string {
	return callback();
}
console.log("do it and let me know: " + (far(String), "Done it!"));
console.log((far(String), "Done it again!"));
