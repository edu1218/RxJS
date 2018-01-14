var Rx = require('rxjs/Rx')

let util = require('util')
console.log(`他先後傳遞了 'Jerry', 'Anna' 然後結束(complete)`);
console.log(`of接收對象是個別參數,然後用arguments帶入`);

var source = Rx.Observable.of('Jerry', 'Anna');
console.log(util.inspect(source));
source.subscribe({//使用物件引入就要標示next,error,complete屬性
    next: function(value) {//傳入 Jerry Anna
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});