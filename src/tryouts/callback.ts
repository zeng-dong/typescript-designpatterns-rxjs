function foo(boo: (s: string) => void) {
	return boo("I am the callback");
}

foo(function (a: string): void {
	console.log(a);
});
