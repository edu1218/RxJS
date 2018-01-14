

const Rx = require('rxjs/Rx')
const events = require('events')
const emitter = new events.EventEmitter()

var source = Rx.Observable.fromEvent(emitter, 'click')
  .takeUntil(Rx.Observable.interval(2000));
var ones = source.mapTo(1);
var seed = 0;

var count = ones.reduce((acc, one) => acc + one, seed);

count.subscribe(x => console.log(x));
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')
setTimeout(() => { emitter.emit('click') }, 3000)
setTimeout(() => { emitter.emit('click') }, 5000)
/*
source:-----c------c-c----end collection[{time:xxx,data:'click'},{time:yyy,data:'click'},{time:zzz,data:'click'},{time:end,data:''}]
ones  :-----1------1-1----end collection[{time:xxx,data:1},{time:yyy,data:1},{time:zzz,data:1},{time:end,data:''}]
reduce:-------------------3   collection[{time:end,data:3}]


*/