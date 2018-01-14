const Rx = require('rxjs/Rx')
const events = require('events')
const emitter=new events.EventEmitter()
var click = Rx.Observable.fromEvent(emitter, 'click');
var source = click.map(e => Rx.Observable.interval(1000).take(3));

var example = source.concatAll();
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
emitter.emit('click')
setTimeout(() => {
    emitter.emit('click')
}, 5000);
/*
click  : ---------c-c------------------c--.. 
        map(e => Rx.Observable.interval(1000))
source : ---------o-o------------------o--..
                   \ \                  \
                    \ ----0----1----2|   ----0----1----2|
                     ----0----1----2|
                     concatAll()
example: ----------------0----1----2----0----1----2--..
 concatAll 會一個一個處理，
 一定是等前一個 observable 完成(complete)才會處理下一個 observable

*/