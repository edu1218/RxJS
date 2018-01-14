//throttle:掐住

const Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(300).take(5);
var example = source.throttleTime(1000);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});


/*
source  :--0--1--2--3--4/
     throttleTime(1000)
example :--0..........-4/
基本上每次看到 debounce 就會看到 throttle，
他們兩個的作用都是要降低事件的觸發頻率，但行為上有很大的不同。
跟 debounce 的不同是 throttle 會先開放送出元素，
等到有元素被送出就會沈默一段時間，等到時間過了又會開放發送元素。
*/