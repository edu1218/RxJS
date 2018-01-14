const Rx=require('rxjs/Rx')
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});

console.log('before subscribe');
observable.observeOn(Rx.Scheduler.async) // 設為 async
.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
console.log('after subscribe');
/*
程式碼原本是同步執行的，
但我們用了 observable.observeOn(Rx.Scheduler.async) 
原本是同步執行的就變成了非同步執行
*/