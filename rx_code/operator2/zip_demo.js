var Rx = require('rxjs/Rx')
var source = Rx.Observable.from('hello');
var source2 = Rx.Observable.interval(1000);

var example = source.zip(source2, (x, y) => x);
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});