var Rx = require('rxjs/Rx')

var source1 = Rx.Observable.create(function (observer) {
    var i = 0;
    setInterval(() => {
        observer.next(i++);
    }, 1000)
});
var source2 = Rx.Observable.interval(1000)
var source3 = Rx.Observable.timer(1000, 2000)
var source4=Rx.Observable.timer(5000)
source3.subscribe({
	next: function(value) {
		console.log(value,new Date().toLocaleTimeString())
	},
	complete: function() {
		console.log('complete!');
	},
	error: function(error) {
    console.log('Throw Error: ' + error)
	}
});