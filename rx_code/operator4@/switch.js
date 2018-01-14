const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()

var click = Rx.Observable.fromEvent(emitter, 'click');
var source = click.map(e => Rx.Observable.interval(1000));
//         click:Observable<event>  source:Observable<Observable<number>>

var example = source.switch();
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
setTimeout(() => {
    emitter.emit('click')
}, 4000);
/*
click  : ---------c-c------------------c--.. 
        map(e => Rx.Observable.interval(1000))
source : ---------o-o------------------o--..
                   \ \                  \----0----1--...
                    \ ----0----1----2----3----4--...
                     ----0----1----2----3----4--...
                     switch()
example: -----------------0----1----2--------0----1--...
switch 最重要的就是他會在新的 observable 送出後直接處理新的 observable 
不管前一個 observable 是否完成，
每當有新的 observable 送出就會直接把舊的 observable 退訂(unsubscribe)，
永遠只處理最新的 observable!

*/