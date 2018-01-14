const Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(300).take(10);
var source2 = source.delay(Math.random()*500)
var example = source2.debounceTime(300);

example.subscribe({
    next: (value) => { console.log(value,new Date().getTime()) },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*

debounce 運作的方式是每次收到元素，他會先把元素 cache 住並等待一段時間(1000毫秒)，
如果這段時間內已經沒有收到任何元素，則把元素送出；如果這段時間內又收到新的元素，
則會把原本 cache 住的元素釋放掉並重新計時，不斷反覆。
*/