var Rx = require('rxjs/Rx')
var master = Rx.Observable.from('hello').zip(Rx.Observable.interval(500), (x, y) => x);
var slave = Rx.Observable.from([0,1,0,0,0,1]).zip(Rx.Observable.interval(300), (x, y) => x);

var example = master.withLatestFrom(slave, (x, y) => {
    return y === 1 ? x.toUpperCase() : x;
});

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
master   : ----h----e----l----l----o|
slave   : --0--1--0--0--0--1|

withLatestFrom(some, (x, y) =>  y === 1 ? x.toUpperCase() : x);
每次master 有新消息就會去檢查slave新消息

example: ----h----e----l----L----O|

withLatestFrom 很常用在一些 checkbox 型的功能，例如說一個編輯器，
我們開啟粗體後，打出來的字就都要變粗體，粗體就像是 some observable，
而我們打字就是 main observable。
 */
