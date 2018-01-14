const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()

var source = Rx.Observable.interval(1000);
var mouseDown = Rx.Observable.fromEvent(emitter, 'mousedown');
var mouseUp = Rx.Observable.fromEvent(emitter, 'mouseup');

var example = source
    .windowToggle(mouseDown, () => mouseUp)//closeselector:function
  //第一個是開始的 observable，第二個是一個 callback 可以回傳一個結束的 observable  
  .switch();
  
example.subscribe(console.log);

emitter.emit('mousedown')
setTimeout(() => {
    emitter.emit('mouseup')    
}, 5000);

/*
source   : ----0----1----2----3----4----5--...

mouseDown: -------D------------------------...
mouseUp  : ---------------------------U----...

        windowToggle(mouseDown, () => mouseUp)

         : -------o-------------------------...
                  \
                   -1----2----3----4--|
                   switch()
example  : ---------1----2----3----4---------...

*/