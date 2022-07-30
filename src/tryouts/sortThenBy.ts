var fruits = [
	{ colA: "apple", colB: "red delicious" },
	{ colA: "pear", colB: "red anjou" },
	{ colA: "orange", colB: "navel" },
	{ colA: "orange", colB: "blood" },
	{ colA: "pear", colB: "green anjou" },
	{ colA: "apple", colB: "granny smith" },
	{ colA: "orange", colB: "clementine" },
];

console.log(
	fruits
		.sort((a, b) => (a.colA < b.colA ? -1 : 1))
		.sort((a, b) => (a.colB < b.colB ? -1 : 1))
);

console.log(
	fruits.sort((a, b) => {
		if (a.colA === b.colA) {
			return a.colB < b.colB ? -1 : 1;
		} else {
			return a.colA < b.colA ? -1 : 1;
		}
	})
);
