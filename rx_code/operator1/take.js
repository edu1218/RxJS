var Rx = require('rxjs/Rx')


var source = Rx.Observable.interval(1000);
var newS = source.take(3);

newS.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : -----0-----1-----2-----3--..
                take(3)
example: -----0-----1-----2| */