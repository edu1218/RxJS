const Rx = require('rxjs/Rx')

var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2])
            .zip(Rx.Observable.interval(500), (x,y) => x);

var example = source
                .map(x => x.toUpperCase())
    .catch((error, obs) => { console.log(obs == example); return obs });

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});   
/*
source : ----a----b----c----d----2|
        map(x => x.toUpperCase())
         ----A----B----C----D----err|
        catch((error, obs) => obs)
example: ----A----B----C----D--------A----B----C----D--..
catch 的 callback 能接收第二個參數，
這個參數會接收當前的 observalbe，
我們可以回傳當前的 observable 來做到重新執行

因為是我們只是簡單的示範，所以這裡會一直無限循環，實務上通常會用在斷線重連的情境。
*/