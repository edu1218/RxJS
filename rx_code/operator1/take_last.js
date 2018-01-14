var Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(1000)
    .take(6)
    .takeLast(2)
    .subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
    });
/*
       : ---0---1---2---3---4---5
                  takeLast(2)
       : ------------------------(45)

*/