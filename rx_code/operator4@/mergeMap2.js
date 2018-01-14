const Rx = require('rxjs/Rx')
const fetch=require('node-fetch')
const events = require('events')
const emitter = new events.EventEmitter()


function getPostData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
}
var source = Rx.Observable.fromEvent(emitter, 'click');

var example = source.mergeMap(
                e => Rx.Observable.from(getPostData()), //project  return subscribable
    (e, res, eIndex, resIndex) => res.title//resultselector return any
    , 3);//限制concurrent數量

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')
//下面的沒空位會先suspend直到有空位
emitter.emit('click')
emitter.emit('click')
/*
我連續點按了五下，但第四個 request 是在第一個完成後才送出的，
這個很適合用在特殊的需求下，可以限制同時發送的 request 數量。

*/