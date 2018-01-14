// function clickHandler(event) {
// 	console.log('user click!');
// }

// document.body.addEventListener('click', clickHandler)
//3之角色的設計模型
//clickHandler:監聽者（我
//body:觀察(事件)者
//click:事件
//我向body註冊一個事件處理
//當有click發生body會把事件內容發給我處理
/***************建構函數式Observer************* */
function Observer1() {//Observer:Function instance
	
	// 這個 if 只是避免使用者不小心把 Producer 當作函式來調用
	if(!(this instanceof Observer1)) {
	  throw new Error('請用 new Observer1()!');
	  // 仿 ES6 行為可用： throw new Error('Class constructor Observer cannot be invoked without 'new'')
	}
	
	this.listeners = [];
}

// 加入監聽的方法
Observer1.prototype.addListener = function(listener) {
	if(typeof listener === 'function') {
		this.listeners.push(listener)
	} else {
		throw new Error('listener 必須是 function')
	}
}

// 移除監聽的方法
Observer1.prototype.removeListener = function (listener) {
    //splice: 原數組從index切出1個元素
	this.listeners.splice(this.listeners.indexOf(listener), 1)
}

// 發送通知的方法
Observer1.prototype.notify = function(message) {
	this.listeners.forEach(listener => {
		listener(message);
	})
}


/***************類別式Observer寫法************* */
class Observer2 {
	constructor() {
		this.listeners = [];
	}
	addListener(listener) {//只有新增時需要確認類型
		if(typeof listener === 'function') {
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
var egghead = new Observer2(); 
// new 出一個 Producer 實例叫 egghead

function listener1(message) {
	console.log(message + 'from listener1');
}

function listener2(message) {
	console.log(message + 'from listener2');
}

egghead.addListener(listener1); // 註冊監聽
egghead.addListener(listener2);

egghead.notify('A new course!!') // 當某件事情方法時，執行