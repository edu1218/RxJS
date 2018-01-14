

var Rx = require('rxjs/Rx')

let util=require('util')
var events = require('events');
var eventEmitter = new events.EventEmitter();


var source = Rx.Observable.fromEvent(eventEmitter, 'scream');

source.subscribe({
    
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});


 eventEmitter.emit('scream');//回傳undefined 至少是對scream 發射有反應
