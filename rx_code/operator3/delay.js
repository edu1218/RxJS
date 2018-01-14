const Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(300).take(5);
//delay接收毫秒
var example = source.delay(500);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : --0--1--2--3--4|
        delay(500)
example: -------0--1--2--3--4|*/