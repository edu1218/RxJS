const Rx = require('rxjs/Rx')
const fetch=require('node-fetch')
const events = require('events')
const emitter = new events.EventEmitter()
function getPostData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
}

var source = Rx.Observable.fromEvent(emitter, 'click');

var example = source.concatMap(
                    e => Rx.Observable.from(getPostData()));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')
emitter.emit('click')
/*
這裡我們每點擊一下畫面就會送出一個 HTTP request，如果我們快速的連續點擊，
大家可以在開發者工具的 network 看到每個 request 是等到前一個 request 完成才會送出下一個 request
*/