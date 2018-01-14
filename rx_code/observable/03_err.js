var Rx = require('rxjs/Rx')

var observable = Rx.Observable
  .create(function(observer) {
    try {
      observer.next('Jerry');
      observer.next('Anna');
      throw 'some exception';
    } catch(e) {
      observer.error(e)
    }
  });
	
// 宣告一個觀察者物件，具備 next, error, complete API讓obsersvable使用
var observer = {
	next: function(value) {//
		console.log(value);
	},
	error: function(error) {
		console.log('Error: ', error)
	},
	complete: function() {
		console.log('complete')
	}
}


observable.subscribe(observer)