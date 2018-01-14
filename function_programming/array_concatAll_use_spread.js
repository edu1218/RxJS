let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3=[[1, 2],[3, 4]]
console.log(arr1.concat(arr2))
console.log(...arr3);
console.log([100].concat(...arr3));
console.log(['just for using concat'].concat.apply([], arr3));
console.log([].push(1,2,3,4));





