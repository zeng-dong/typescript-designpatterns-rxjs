const { of, operators: {
    map,
    mergeMap,
    concatMap,
    switchMap,
    exhaustMap
}} = rxjs;

const { getNum, processNum, nums, numsWithDelay } = helper();

nums.subscribe( n => console.log(n));





