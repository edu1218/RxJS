const Rx=require('rxjs/Rx')
var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2])
            .zip(Rx.Observable.interval(500), (x,y) => x);

var example = source
                .map(x => x.toUpperCase())
                .catch(error => Rx.Observable.of('h'));//catch

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});  
/*source:----a----b----c----d----2|
        map(x => x.toUpperCase())
         ----A----B----C----D----err|
        catch(error => Rx.Observable.of('h'))
example: ----A----B----C----D----h|    
錯誤發生後就會進到 catch 並重新處理一個新的 observable，
我們可以利用這個新的 observable 來送出我們想送的值
*/
