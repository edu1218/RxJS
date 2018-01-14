var Rx = require('rxjs/Rx')


var observable = Rx.Observable
    .create(//create的輸入是什麼,observer是誰給的
    function (observer) { //{ 我想做哪些事?}
        observer.next('Jerry'); 
        observer.next('Anna');
        setTimeout(() => {
			observer.next('RxJS 30 days!');
		}, 30)
    })
console.log('start');
//observable是怎麼創建的?
observable.subscribe(console.log)//subscribe的輸入是什麼,在哪邊用到
console.log('end');
