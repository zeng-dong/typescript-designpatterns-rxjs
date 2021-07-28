function foo(bar: string) {
    return 'Hello, ' + bar
}

let baz = 'ABC'

console.log(foo(baz));


// a tuple of two elements consisting of a number and a string
// dictionary if string where the key is a number
// a Set of numbers
let tpl: [ number, string];
let dict: { [key: number]: string};
let set: Set<number>;

tpl = [1, 'abc'];
dict = {123: 'abc', 456: 'def'};
set = new Set([1,23,56]);


let d: unknown[];
d = [1, 'a', true, ['even', 'another', 'array']];

// eslint is against any over unknown
let d2: any[];

// test

