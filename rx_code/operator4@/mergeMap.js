const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()

var source = Rx.Observable.fromEvent(emitter, 'click');

var example = source
                .mergeMap(
                    e => Rx.Observable.interval(100).take(3)
                );
                
/*
mergeMap 也能傳入第二個參數 selector callback，
這個 selector callback 跟 concatMap 第二個參數也是完全一樣的，
但 mergeMap 的重點是我們可以傳入第三個參數，來限制並行處理的數量
*/
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
setTimeout(() => {
    emitter.emit('click')
},100)

/*
urce : -----------c-c------------------...
        concatMap(c => Rx.Observable.interval(100).take(3))
example: -------------0-(10)-(21)-2----------...
記得 mergeMap 可以並行處理多個 observable，以這個例子來說當我們快速點按兩下，
元素發送的時間點是有機會重疊的，這個部份的細節大家可以看上一篇文章 merge 的部分。



*/