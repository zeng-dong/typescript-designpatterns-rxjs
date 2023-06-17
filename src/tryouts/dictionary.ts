console.log(
	"type error when typescript does not know the full representation of an object"
);
let notAnyScores = {};
///notAnyScores.bill = 10;  // type error, not a problem in js

console.log("type does not occur when use any");
let scores: any = {};
scores.bill = 10;

console.log("using an indexed object type annotation");

let indexScores: { [name: string]: number } = {};
indexScores.bill = 10;
/// indexScores.pay = "20"            // type error
/// convention: use key instead of name, or even ommit it: {[string]: number}

console.log("Unfortunately we can’t restrict keys using a union type");
///let unionTypeKeyScores: { 	[name: "bill" | "bob"]: number;} = {};

type Person = {
	email: string;
	rating: number;
};

let complexValueTypeScore: { [key: string]: Person } = {};
complexValueTypeScore.bill = { email: "aaa", rating: 9 };

console.log("===========using the record utility type=========");
let recordScores: Record<string, number> = {};
recordScores.bill = 10;
recordScores.pay = 20;
///recordScores.mustBeNumber = "100";  // type error

console.log("   and we can narrow the type of keys using a union type:");
let unionKeyRecordScores: Record<"bill" | "pay", number> = {
	bill: 0,
	pay: 0,
};
unionKeyRecordScores.bill = 10;
unionKeyRecordScores.pay = 20;

console.log(
	"===========A Map is a standard JavaScript feature that is useful for holding key-value pairs=========="
);
console.log(
	" and a corresponding ts map, takes in the types for the key and value =========="
);
let tsMapScores = new Map<string, number>();
tsMapScores.set("bill", 10);
tsMapScores.set("pay", 20);
console.log(tsMapScores);
