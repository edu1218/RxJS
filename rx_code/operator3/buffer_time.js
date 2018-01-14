var Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(300);
var example = source.bufferTime(1000);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : --0--1--2--3--4--5--6--7..送入緩存
            bufferTime(1秒)每一秒送出緩存
example: ---------([0,1,2])---------([3,4,5])    */