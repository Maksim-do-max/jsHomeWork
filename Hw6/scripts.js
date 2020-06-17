//------№1
console.log('aaa@bbb@ccc'.replace(/@/gi, '!'));

//------№ 2

let date = '2025-12-31';

let result = date.replace(/(2025)(-)(12)(-)(31)/, '$5$2$3$4$$i');
console.log(result.replace(/-/g, '/'));

//------ №3

let str = 'я учу javascript';

console.log(str.slice(2,5));
console.log(str.substr(2,3));
console.log(str.substring(2,5));

console.log(str.slice(6,16));
console.log(str.substr(6,10));
console.log(str.substring(16,6));