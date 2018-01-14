const Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(1000)
    .take(3)
    .multicast(new Rx.Subject());
/*
multicast 可以用來掛載 subject ,
並回傳一個可連結(connectable)的 observable
*/

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

source.subscribe(observerA); // subject.subscribe(observerA)

source.connect(); // source.subscribe(subject)

setTimeout(() => {
    source.subscribe(observerB); // subject.subscribe(observerB)
}, 1000);
/*
必須真的等到 執行 connect() 後才會真的用 subject 訂閱 source，並開始送出元素，如果沒有執行 connect() observable 是不會真正執行的。
*/