const Rx = require('rxjs/Rx')

var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2])
    .zip(Rx.Observable.interval(500), (x, y) => x);

var example = source
    .map(x => x.toUpperCase())
    .retry();//簡化catch寫法

example.subscribe({
    next: (value) => {
        console.log(value);
    },
    error: (err) => {
        console.log('Error: ' + err);
    },
    complete: () => {
        console.log('complete');
    }
});
/*
通常這種無限的 retry 會放在即時同步的重新連接，
讓我們在連線斷掉後，不斷的嘗試

*/