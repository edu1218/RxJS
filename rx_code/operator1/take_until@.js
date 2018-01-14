var Rx = require('rxjs/Rx')

var events = require('events');
var eventEmitter = new events.EventEmitter();

var source = Rx.Observable.interval(1000);
var click = Rx.Observable.fromEvent(eventEmitter, 'click');
var example = source.takeUntil(click);     
   
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

setTimeout(() => { eventEmitter.emit('click') }, 5000)
/*
source : -----0-----1-----2------3--
click  : ----------------------c----
                takeUntil(click)
example: -----0-----1-----2----|*/