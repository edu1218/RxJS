const Rx = require('rxjs/Rx')

const events = require('events')
const emitter = new events.EventEmitter()
function getData() {
    return ['data1','data2']
}

var source = Rx.Observable.fromEvent(emitter, 'click');

var example = source
    .concatMap(
    e => Rx.Observable.from(getData())
    , (e, res, eIndex, resIndex) => { 
        return [e, res, eIndex, resIndex]
    }
);
/*
1.外部 observable 送出的元素
2.內部 observable 送出的元素
3.外部 observable 送出元素的 index
4.內部 observable 送出元素的 index

*/
example.subscribe({
    next: (value) => {
        console.log(value);
    },
    error: (err) => {
        console.log('Error: ' + err);
    },
    complete: () => {
        console.log('complete');
    }
});
emitter.emit('click')
setTimeout(() => { emitter.emit('click') }, 3000)
/*
這個範例的外部 observable 送出的元素就是 click event 物件，
內部 observable 送出的元素就是 response 物件，
這裡我們回傳 response 物件的 title 屬性，
這樣一來我們就可以直接收到 title，
這個方法很適合用在 response 要選取的值跟前一個事件或順位(index)相關時。
*/

