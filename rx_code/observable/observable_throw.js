var Rx = require('rxjs/Rx')

var source = Rx.Observable.throw('Oop!');

source.subscribe({
	next: function(value) {
		console.log(value)
	},
	complete: function() {
		console.log('complete!');
	},
	error: function(error) {
    console.log('Throw Error: ' + error)
	}
});