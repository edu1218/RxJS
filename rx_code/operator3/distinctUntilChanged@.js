const Rx=require('rxjs/Rx')
var source = Rx.Observable.from(['a', 'b', 'c', 'c', 'b'])
            .zip(Rx.Observable.interval(300), (x, y) => x);
var example = source.distinctUntilChanged()

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
source : --a--b--c--c--b|
            distinctUntilChanged()
example: --a--b--c-----b|
distinctUntilChanged 只會暫存一個元素，
並在收到新元素時跟暫存的元素比對
如果不一樣就把暫存的元素換成剛接收到的新元素並送出


distinctUntilChanged 是比較常在實務上使用的，
最常見的狀況是我們在做多方同步時。當我們有多個 Client，
且每個 Client 有著各自的狀態，Server 會再一個 Client 
需要變動時通知所有 Client 更新，
但可能某些 Client 接收到新的狀態其實跟上一次收到的是相同的，
這時我們就可用 distinctUntilChanged 方法只處理跟最後一次不相同的訊息，
像是多方通話、多裝置的資訊同步都會有類似的情境。

*/