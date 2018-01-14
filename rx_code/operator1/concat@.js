var Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(1000).take(3),
    source2 = Rx.Observable.of(3),
    source3 = Rx.Observable.of(4, 5, 6);
source.concat(source2, source3).subscribe({
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
//也可以用Rx.Observable.concat(source, source2, source3)....
/*
source : ----0----1----2|
source2: (3)|
source3: (456)|
            concat()
example: ----0----1----2(3456)|*/