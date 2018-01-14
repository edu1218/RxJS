var Rx = require('rxjs/Rx')
var o1 = Rx.Observable.interval(2000).take(1);
var o2 = Rx.Observable.interval(1000).take(3);
var o3 = Rx.Observable.interval(4000).take(1);

var source = Rx.Observable.of(o1, o2, o3);

var example = source.concatAll();//
// concatAll 後的行為永遠都是先處理第一個 observable，等到當前處理的結束後才會再處理下一個
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }

});
/*source : (o1   ,  o2   ,   o3)|
           \        \       \
            -0|      012|    ----0|
                
                concatAll()        

example: -0012---0|*/