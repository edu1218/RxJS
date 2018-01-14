var Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(300);
var source2 = Rx.Observable.interval(1000);
var example = source.buffer(source2);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : --0--1--2--3--4--5--6--7..觸發前先緩存在陣列中
source2: ---------0---------1--------... 觸發訊號作用
            buffer(source2) Observable<T> => Observable<Array<T>>
example: ---------([0,1,2])---------([3,4,5])  

  */