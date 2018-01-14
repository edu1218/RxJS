

var Rx = require('rxjs/Rx')

var events = require('events');
var eventEmitter = new events.EventEmitter();
var click = Rx.Observable.fromEvent(eventEmitter, 'click');
var source = click.map(e => { return Rx.Observable.of(1, 2, 3) });

var example = source.concatAll();
//.concatAll:將Observable<Observable<>>轉成observable<>
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
setInterval(() => { eventEmitter.emit('click') }, 1000)
/*
click  : ------c------------c--------

        map(e => Rx.Observable.of(1,2,3))

source : ------o------------o--------
                \            \
                 (123)|       (123)|

                   concatAll()

example: ------(123)--------(123)------------*/