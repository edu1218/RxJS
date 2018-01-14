const Rx=require('rxjs/Rx')
var source = Rx.Observable.interval(1000)
             .do(x => console.log('send: ' + x))
             .multicast(new Rx.Subject())
             .refCount();

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

var subscriptionA = source.subscribe(observerA);
// 訂閱數 0 => 1

var subscriptionB;
setTimeout(() => {
    subscriptionB = source.subscribe(observerB);
    // 訂閱數 0 => 2
}, 1000);

setTimeout(() => {
    subscriptionA.unsubscribe(); // 訂閱數 2 => 1
    subscriptionB.unsubscribe(); // 訂閱數 1 => 0，source 停止發送元素
}, 7000);
/*
當 source 一被 observerA 訂閱時(訂閱數從 0 變成 1)，就會立即執行並發送元素，我們就不需要再額外執行 connect。

同樣的在退訂時只要訂閱數變成 0 就會自動停止發送
*/