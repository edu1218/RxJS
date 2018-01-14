const Rx=require('rxjs/Rx')
var source = Rx.Observable.interval(300).take(5);

var example = source
              .groupBy(x => x % 2);
              
example.subscribe(console.log);

// GroupObservable { key: 0, ...}
// GroupObservable { key: 1, ...}
/*
source : ---0---1---2---3---4|
             groupBy(x => x % 2)
example: ---o---o------------|
            \   \
            \   1-------3----|
            0-------2-------4|
*/