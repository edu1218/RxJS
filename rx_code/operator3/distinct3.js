const Rx = require('rxjs/Rx')
var source = Rx.Observable.from(['a', 'b', 'c', 'a', 'c'])
            .zip(Rx.Observable.interval(300), (x, y) => x);
var flushes = Rx.Observable.interval(1300);
var example = source.distinct(null, flushes);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : --a--b--c--a--c|
flushes: ------------0---...
        distinct(null, flushes);
example: --a--b--c-----c|
distinct 可以傳入第二個參數 flushes observable 用來清除暫存的資料
 */
