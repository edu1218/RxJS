var Rx = require('rxjs/Rx')

var source = Rx.Observable.interval(1000);
var newest = source.map(x => x + 1); 
source.subscribe(console.log)
/*
source: -----0-----1-----2-----3--...
            map(x => x + 1)
newest: -----1-----2-----3-----4--.*/