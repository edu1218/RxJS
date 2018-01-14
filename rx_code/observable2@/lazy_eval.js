var source = Rx.Observable.from([1,2,3,4,5]);
var example = source.map(x => x + 1);
//還沒subscribe所以都還沒運算



var source = [1,2,3,4,5];
var example = source.map(x => x + 1); 
//example已經有得到結果了

/*

延遲運算所帶來的優勢:

*/