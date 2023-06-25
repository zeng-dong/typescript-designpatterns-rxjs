import { Observable, Subscriber } from "rxjs";

const observable = new Observable<string>((subscriber: Subscriber<string>) => {
	subscriber.next("Hello World!");
});
