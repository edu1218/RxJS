const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()
var click = Rx.Observable.fromEvent(emitter, 'click');
var source = Rx.Observable.interval(1000);
var example = click.window(source)

example
    .map(innerObservable => innerObservable.count()) //@@
    .switch()
    .subscribe(console.log);
//程式碼是縱軸,時間是橫軸
emitter.emit('click')
emitter.emit('click')
setTimeout(() => {
    emitter.emit('click')
    emitter.emit('click')
}, 500)

setTimeout(() => { //
    emitter.emit('click')
}, 1000);
setTimeout(() => { //
    emitter.emit('click')
    emitter.emit('click')
    emitter.emit('click')
}, 2200);

/*
source :---------0---------1---------2---------3...
click  :-cc---cc-----c-------c-c-c---------------
                 window(source)
example:w--------w---------w---------w---------w...
        \        \         \         \
         cc---cc- ---c----- -c-c-c---
                   map(innerObservable=>innerObservable.count())
        m--------m---------m---------m---------m
        \        \         \         \         \
         --------4 --------1 --------3 --------
                   switch()
        ---------4---------1---------3---------

*/