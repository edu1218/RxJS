const Rx = require('rxjs/Rx')


const EventEmitter = require('events');
const emitter = new EventEmitter();




var clicks = Rx.Observable.fromEvent(emitter, 'click');
var source = Rx.Observable.interval(200).take(5);

var example = source
              .delayWhen(
                  x => Rx.Observable.interval(Math.random() * 1000)
              );

example.subscribe({
    next: (value) => { console.log(value,new Date().getTime()); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});



/*
source : -0-1-2-3-4|
    interval(parseInt(Math.random() * 5000))
random1: ---------.
random2: ------.
random3: .
random4: --.
random5: .
source : (35)-4---2--1|











*/






