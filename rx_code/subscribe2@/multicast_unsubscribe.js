const Rx=require('rxjs/Rx')
var source = Rx.Observable.interval(1000)
             .do(x => console.log('send: ' + x))
             .multicast(new Rx.Subject()); // 無限的 observable 

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

var realSubscription = source.connect();

var subscriptionB;
setTimeout(() => {
    subscriptionB = source.subscribe(observerB);
}, 1000);

setTimeout(() => {
    subscriptionA.unsubscribe();
    subscriptionB.unsubscribe(); 
    // 這裡雖然 A 跟 B 都退訂了，但 source 還會繼續送元素
}, 5000);

setTimeout(() => {
    realSubscription.unsubscribe();
    // 這裡 source 才會真正停止送元素
}, 10000);
/*
必須等到 realSubscription.unsubscribe() 執行完，source 才會真的結束。

雖然用了 multicast 感覺會讓我們處理的對象少一點，
但必須搭配 connect 一起使用還是讓程式碼有點複雜，
*/