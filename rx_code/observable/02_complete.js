var Rx = require('rxjs/Rx')

var observable = Rx.Observable
	.create(function (observer) {
		
		observer.next('Jerry'); 
		observer.next('Anna');
		observer.complete();
		observer.next('not work');

	})

// 宣告一個觀察者,next, error, complete 三個屬性(超過一個就要按照API方式做)
var observer = {
	next: function (value) {
		console.log(value);
	},
	error: function (error) {
		console.log(error)
	},
	complete: function () {
		console.log('complete')
	}
}


/*subscribe可以接收物件引入,或是一般參數(next,err,complete),
根據位置給對應的輸入實體*/
observable.subscribe(observer)
/*也可以
observable.subscribe(
(value)=>{console.log(value)},
(err)=>{console.log(err)},
()=>{console.log('done')},

)	
*/