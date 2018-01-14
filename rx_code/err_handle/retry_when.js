var source = Rx.Observable.from(['a','b','c','d',2])
            .zip(Rx.Observable.interval(500), (x,y) => x);

var example = source
                .map(x => x.toUpperCase())
                .retryWhen(errorObs => errorObs.delay(1000));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
}); 
/*
source : ----a----b----c----d----2|
        map(x => x.toUpperCase())
         ----A----B----C----D----err|
        retryWhen(errorObs => errorObs.delay(1000))
example: ----a----b----c----d----..........----a----b----c----d----...
*/