const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()

var click = Rx.Observable.fromEvent(emitter, 'click');
var source = click.map(e => Rx.Observable.interval(1000));

var example = source.mergeAll();
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
emitter.emit('click')
