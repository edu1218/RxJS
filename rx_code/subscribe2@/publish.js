

const Rx = require('rxjs/Rx')
var source = Rx.Observable.interval(1000)
    .take(3)
    .publish()//簡寫了.multicast(new Rx.Subject()) 
    .refCount()


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
setTimeout(() => {
    source.subscribe(observerB)
}, 1000)