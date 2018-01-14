var Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(500).take(3);
var source2 = Rx.Observable.interval(300).take(6);
var example = source.merge(source2);
//var example = Rx.Observable.merge(source, source2);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : ----0----1----2|
source2: --0--1--2--3--4--5|
            merge()
example: --0-01--21-3--(24)--5|
merge 的邏輯有點像是 OR(||)，就是當兩個 observable 其中一個被觸發時都可以被處理，
這很常用在一個以上的按鈕具有部分相同的行為。
*/