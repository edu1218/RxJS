var Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(1000);
var example = source.skip(3);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : ----0----1----2----3----4----5--....
                    skip(3)
example: -------------------3----4----5--...

*/