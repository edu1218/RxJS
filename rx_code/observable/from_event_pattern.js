var Rx = require('rxjs/Rx')

class Producer { //負責:調用listners中的函數對象,增加或刪除函數對象
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        if (typeof listener === 'function') {
            this.listeners.push(listener)
        } else {
            throw new Error('listener 必須是 function')
        }
    }
    removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1)
    }
    notify(message) {
        this.listeners.forEach(listener => {
            listener(message);
        })
    }
}
// ------- 以上都是之前的程式碼 -------- //

var egghead = new Producer();


var source = Rx.Observable
    .fromEventPattern( //將handler丟給egghead
        (handler) => egghead.addListener(handler),//handler是由observable提供的
        (handler) => egghead.removeListener(handler)
    );

source.subscribe( //observable取得handler
        console.log
    )

egghead.notify('hello world');
// Hello! Can you hear me?