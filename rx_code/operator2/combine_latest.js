var Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(500).take(3);
var newest = Rx.Observable.interval(300).take(6);

var example = source.combineLatest(newest, (x, y) => x + y);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : ----0----1----2|
newest : --0--1--2--3--4--5|

    combineLatest(newest, (x, y) => x + y);
    source 或 newest有輸出就會檢查
                          只有x,y都有值可以用才會調用這個cb
           Latest表示會保留每個observable最新的輸出,當cb的輸入用
example: ----01--23-4--56--7|*/
//說明:https://ithelp.ithome.com.tw/articles/10187638