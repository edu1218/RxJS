const Rx = require('rxjs/Rx')
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

source.subscribe(observerA);
source.subscribe(observerB);
/*
上面這段程式碼，分別用 observerA 跟 observerB 訂閱了 source，
從 log 可以看出來 observerA 跟 observerB 都'各自收到了元素'，
但請記得這兩個 observer 其實是分開執行的也就是說他們是完全獨立的

*/