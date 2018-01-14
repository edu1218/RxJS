const Rx = require('rxjs/Rx')
var source = Rx.Observable.from(['a', 'b', 'c', 'a', 'b'])
            .zip(Rx.Observable.interval(300), (x, y) => x);
var example = source.distinct()

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
/*
distinct:太屌了,可以直接濾掉重複的
也就是說每個新元素進來都會存進緩存中
下一個新元素會跟緩存裡的元素做匹配
有匹配的話就不能輸出消息

*/