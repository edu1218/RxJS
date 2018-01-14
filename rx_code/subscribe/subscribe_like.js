const Rx=require('rxjs/Rx')
var source = Rx.Observable.interval(1000).take(3);

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

var subject = {
    observers: [],

    addObserver:
        function (observer) {
        this.observers.push(observer)
    },
    next: function(value) {
        this.observers.forEach(o => o.next(value))    
    },
    error: function(error){
        this.observers.forEach(o => o.error(error))
    },
    complete: function() {
        this.observers.forEach(o => o.complete())
    }
}

subject.addObserver(observerA)

source.subscribe(subject);

setTimeout(() => {
    subject.addObserver(observerB);
}, 1000);

/*
從上面的程式碼可以看到，我們先建立了一個物件叫 subject，
這個物件具備 observer 所有的方法(next, error, complete)，
並且還能 addObserver 把 observer 加到內部的清單中，
每當有值送出就會遍歷清單中的所有 observer 並把值再次送出，
這樣一來不管多久之後加進來的 observer，
都會是從當前處理到的元素接續往下走，就像範例中所示，
我們用 subject 訂閱 source 並把 observerA 加到 subject 中，
一秒後再把 observerB 加到 subject，
這時就可以看到 observerB 是直接收 1 開始，
這就是組播(multicast)的行為。
*/
/*
什麼是 Subject?
雖然前面我們已經示範直接手寫一個簡單的 subject，
但到底 RxJS 中的 Subject 的概念到底是什麼呢？

首先 Subject 可以拿去訂閱 Observable(source) 代表他是一個 Observer，
同時 Subject 又可以被 Observer(observerA, observerB) 訂閱，
代表他是一個 Observable。

總結成兩句話

Subject 同時是 Observable 又是 Observer
Subject 會對內部的 observers 清單進行組播(multicast)
*/