var Rx = require('rxjs/Rx')

function map(callback) {

    //建立一個新的 observable 並回傳，並且在內部訂閱原本的 observable
    return Rx.Observable.create(
        (observer) => {//在create的cb,替換掉subsribe原本的參數
            let who = this.subscribe( 
                (value) => {
                    try {
                        observer.next(callback(value));//將附加插件跟基本功能結合
                    } catch (e) {
                        observer.error(e);
                    }},
                (err) => {
                    observer.error(err);
                },
                () => {
                    observer.complete()
                }
            )
            return who;
        })
}
Rx.Observable.prototype.map = map;
var people = Rx.Observable.of('Jerry', 'Anna'); //設置1
var helloPeople = people.map((item) => item + ' Hello~'); //附加插件引入

people.subscribe(console.log); //調用
helloPeople.subscribe(console.log); //調用