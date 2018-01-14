const Rx=require('rxjs/Rx')
var subject = new Rx.BehaviorSubject(0); // 0 為起始值
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
// "A next: 0"
subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"
subject.next(4);
setTimeout(() => {
    subject.subscribe(observerB); 
    // "B next: 3"
}, 1000)//
/*
可以看得出來 BehaviorSubject 在建立時就需要給定一個狀態，
並在之後任何一次訂閱，就會先送出最新的狀態。
其實這種行為就是一種狀態的表達而非單存的事件，
就像是年齡跟生日一樣，年齡是一種狀態而生日就是事件；
所以當我們想要用一個 stream 來表達年齡時，就應該用 BehaviorSubject
*/
