//------№1
console.log('aaa@bbb@ccc'.replace(/@/gi, '!'));

//------№ 2

let date = '2025-12-31';

let result = date.replace(/(2025)(-)(12)(-)(31)/, '$5$2$3$4$1');
console.log(result.replace(/-/g, '/'));

//------ №3

let str = 'я учу javascript';

console.log(str.slice(2, 5));
console.log(str.substr(2, 3));
console.log(str.substring(2, 5));

console.log(str.slice(6, 16));
console.log(str.substr(6, 10));
console.log(str.substring(16, 6));

//----- Задача №4

arr = [4, 2, 5, 19, 13, 0, 10];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3)
}

console.log(Math.sqrt(sum));

//----Задача № 5

let a = 3,
    b = 5,
    c = Math.abs(a - b);

console.log(c);

a = 6;
b = 1;
c = Math.abs(a - b);

console.log(c);

//------ № 6

date = new Date();

let hours = (date.getHours()),
    minute = (date.getMinutes()),
    sec = (date.getSeconds()),
    day = (date.getDate()),
    month = (date.getMonth() + Number(1)),
    year = (date.getFullYear());

function getZero(number) {

    if (number >= 0 && number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

console.log(`${hours}:${minute}:${sec} ${getZero(day)}.${getZero(month)}.${year}`);

//----  №7

str = 'aa aba abba abbba abca abea';

console.log(str.match(/ab+a/gi));

//------№ 8

let phoneNumber = '+375-29-1243577';

function fastCheck(phone) {
    regexp = /^\+(\d{1,3})-(\d{1,3})-(\d{7,8})$/gi;

    if (regexp.test(phone)) {
        return true;
    } else {
        return false;
    }
}
console.log(fastCheck(phoneNumber));


    //-----9

let url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

function getUrl(url) {

    let domenName = url.match(/{https?:\/\/}{[a-zA-Z.\-]{2,}}\/.+\/.?\?{[a-zA-Z_\-=]+=.+}?{#[\.+]?}/g);
    return [domenName];
}

console.log(getUrl(url));