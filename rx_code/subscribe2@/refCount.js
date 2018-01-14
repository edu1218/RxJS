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
/*
通常我們會希望有 observer 訂閱時，就立即執行並發送元素，
而不要再多執行一個方法(connect)，這時我們就可以用 refCount。
refCount 必須搭配 multicast 一起使用，
他可以建立一個只要有訂閱就會'自動 connect' 的 observable


*/