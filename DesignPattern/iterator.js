//ES6才支援iterator
var arr = [1, 2, 3];
//你要用的數組對象  +   '''[Symbol.iterator]()''''''
var iterator = arr[Symbol.iterator]();


iterator.next();//取得下一個元素以及該元素存在性
// { value: 1, done: false }
iterator.next();
// { value: 2, done: false }
iterator.next();
// { value: 3, done: false }
iterator.next();
// { value: undefined, done: true }

/**********建構函數版myIterator********** */
function MyIterator(arr) {
    //判斷調用端是new出來的實例

	if(!(this instanceof MyIterator)) {
		throw new Error('請用 new MyIterator()!');
    }
    //_：表示私有用途
	this._array = arr;
	this._cursor = 0;	
}

MyIterator.prototype.next = function() {
	return this._cursor < this._array.length ?
		{ value: this._array[this._cursor++], done: false } ://條件成立
		{ done: true };//條件不成立
}
//MyIterator([])//this:global 報錯

console.log('*******類別寫法*********');
class MyIterator2 {
	constructor(arr) {
		this._array = arr;
		this._cursor = 0;
	}
  
	next() {
		return this._cursor < this._array.length ?
		{ value: this._array[this._cursor++], done: false } :
		{ done: true };
	}
}
console.log('*******添加序列運算功能*******');
class MyIterator2WithMapFunction {
	constructor(arr) {
		this._array = arr;
		this._cursor = 0;
	}
  
	next() {
		return this._cursor < this._array.length ?
		{ value: this._array[this._cursor++], done: false } :
		{ done: true };
	}
	
	mountMap(callback) {
		const iterator = new MyIterator2WithMapFunction(this._array);
		return {
            next: () => {
                //es6功能
				const { done, value } = iterator.next();
				return {
					done: done,
					value: done ? undefined : callback(value)
				}
			}
		}
	}
}

var iterator = new MyIterator2WithMapFunction([1,2,3]);
var newIterator = iterator.mountMap(value => value + 3);

newIterator.next();
// { value: 4, done: false }
newIterator.next();
// { value: 5, done: false }
newIterator.next();
// { value: 6, done: false }