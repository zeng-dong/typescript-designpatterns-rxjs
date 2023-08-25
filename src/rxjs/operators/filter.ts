import { Observable, filter } from "rxjs";
//import { filter } from "rxjs/operators";

interface NewsItem {
	category: "Business" | "Sports";
	content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
	setTimeout(
		() => subscriber.next({ category: "Business", content: "A" }),
		1000
	);
	setTimeout(
		() => subscriber.next({ category: "Sports", content: "B" }),
		3000
	);
	setTimeout(
		() => subscriber.next({ category: "Business", content: "C" }),
		4000
	);
	setTimeout(
		() => subscriber.next({ category: "Sports", content: "D" }),
		6000
	);
	setTimeout(
		() => subscriber.next({ category: "Business", content: "E" }),
		7000
	);
});

const sportsNewsFeed$ = newsFeed$.pipe(
	filter((item) => item.category === "Sports")
);

//newsFeed$.subscribe((item) => console.log(item));

//sportsNewsFeed$.subscribe((item) => console.log(item));

newsFeed$
	.pipe(filter((item) => item.category === "Sports"))
	.subscribe((i) => console.log(i));

// filter
// emit only values matching a given condition
import { of } from "rxjs";
console.log("# filter even numbers");
of(1, 2, 3, 4, 5, 6, 7, 8)
	.pipe(filter((x: number) => x % 2 === 0))
	.subscribe((x: number) => console.log(x));

const num$ = of(1, 2, 3, 4, 5, 6, 7, 8);
const oddNum$ = num$.pipe(filter((x) => x % 2 === 1));
oddNum$.subscribe((x) => console.log(x));

// Output:
// 2
// 4
// 6
// 8
