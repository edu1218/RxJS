var Rx = require('rxjs/Rx')


var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'] 
var source = Rx.Observable.from(arr);
//from接收對象是任何可列舉的參數,array,string,set,map,list,WeakSet, Iterator
//from會依序執行
source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});