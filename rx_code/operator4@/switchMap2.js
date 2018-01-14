const Rx = require('rxjs/Rx')
const fetch=require('node-fetch')
const events = require('events')
const emitter = new events.EventEmitter()
let i=0
var source = Rx.Observable.fromEvent(emitter, 'click');
function getPostData() {
    
    return fetch('https://jsonplaceholder.typicode.com/posts/'+i++)
        .then(res => { return res.json() })
}

var example = source.switchMap(
    e => { return Rx.Observable.from(getPostData())})
/*
switchMap 跟 concatMap 一樣有第二個參數 selector callback 可用來回傳我們要的值，
這部分的行為跟 concatMap 是一樣的，這裡就不再贅述。
*/

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')//只有最後一個會被switchMap輸出