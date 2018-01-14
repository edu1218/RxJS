const Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(300).take(5);
//delay接收Date物件
var example = source.delay(new Date(new Date().getTime() + 1000));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});