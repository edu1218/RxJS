const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()


var source = Rx.Observable.fromEvent(emitter, 'click');

// var example = source
//     .map(e => Rx.Observable.interval(1000).take(3))
//     .concatAll();
//使用concatMap簡化後如下
var example = source
    .concatMap(
        e => Rx.Observable.interval(1000).take(3)
);
//



example.subscribe({
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
emitter.emit('click')
emitter.emit('click')
/*

source : -----------c--c------------------...
        concatMap(c => Rx.Observable.interval(1000).take(3))
example: -------------0-1-2-0-1-2---------...

*/