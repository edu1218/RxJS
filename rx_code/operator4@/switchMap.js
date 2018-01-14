const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()

var source = Rx.Observable.fromEvent(emitter, 'click');

var example = source
                .switchMap(
                    e => Rx.Observable.interval(1000).take(3)
                );
                
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
setTimeout(() => {
    emitter.emit('click')
}, 2000);
/*
source : -----------c--c-----------------...
        concatMap(c => Rx.Observable.interval(100).take(3))
example: -------------0--0-1-2-----------...

*/