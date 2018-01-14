const Rx=require('rxjs/Rx')
var source = Rx.Observable.from(['a', 'b', 'c'])
            .zip(Rx.Observable.interval(500), (x,y) => x);

var example = source.repeat(2);//沒給參數就是無窮次

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
我們有時候可能會想要 retry 一直重複訂閱的效果，但沒有錯誤發生，
這時就可以用 repeat 來做到這件事，
*/