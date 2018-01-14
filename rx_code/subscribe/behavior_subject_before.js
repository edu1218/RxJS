const Rx = require('rxjs/Rx')
var subject = new Rx.Subject();

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

subject.subscribe(observerA);

subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"

setTimeout(() => {
    subject.subscribe(observerB); // 3 秒後才訂閱，observerB 不會收到任何值。
}, 3000)
/*
observerB 訂閱的之後，是不會有任何元素送給 observerB 的，
因為在這之後沒有執行任何 subject.next()，但很多時候我們會希望 subject 能夠表達當前的狀態，
在一訂閱時就能收到最新的狀態是什麼，而不是訂閱後要等到有變動才能接收到新的狀態，
以這個例子來說，我們希望 observerB 訂閱時就能立即收到 3，
希望做到這樣的效果就可以用 BehaviorSubject。
*/