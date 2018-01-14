const Rx = require('rxjs/Rx')

const events = require('events')
const emitter=new events.EventEmitter()
var click = Rx.Observable.fromEvent(emitter, 'click');
var source = Rx.Observable.interval(1000);
var example = source.window(click);//以click決定分隔線,並且嵌存數據

example.concatAll().subscribe(console.log);
emitter.emit('click')
emitter.emit('click')


  
/*
click  : -----------c----------c------------c--
source : ----0----1----2----3----4----5----6---..
                    window(click)
example: o----------o----------o------------o--
         \          \          \
          ---0----1-|--2----3--|-4----5----6|
                    switch() or mergeAll() or concatAll()
       : ----0----1----2----3----4----5----6---..
       window 很類似 buffer 可以把一段時間內送出的元素拆出來
       而 window 則是會把元素拆分出來放到新的 observable 變成
       Observable<T> => Observable<Observable<T>>
*/