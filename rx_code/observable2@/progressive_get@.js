var source = [1, 2, 3];
var example = source
    .filter(x => x % 2 === 0) // 這裡會運算並返回一個完整的陣列
    .map(x => x + 1) // 這裡也會運算並返回一個完整的陣列
/*
Observable operator 的運算方式跟陣列的是完全的不同，
雖然 Observable 的 operator 也都會回傳一個新的 observable，
但因為元素是漸進式取得的關係，所以每次的運算是一個元素運算到底，
而不是運算完全部的元素再返回。    
    
*/
var source = Rx.Observable.from([1,2,3]);
var example = source
              .filter(x => x % 2 === 0)
              .map(x => x + 1)

example.subscribe(console.log);
/*
上面這段程式碼運行的方式是這樣的

送出 1 到 filter 被過濾掉
送出 2 到 filter 在被送到 map 轉成 3，送到 observer console.log 印出
送出 3 到 filter 被過濾掉
每個元素送出後就是運算到底，在這個過程中不會等待其他的元素運算。
這就是漸進式取值的特性
http://i.giphy.com/3o6ZtqrBfUyHvMDQ2c.gif
*/