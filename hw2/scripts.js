//-----Задача №1 hw 2_2

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
num += 7;
num -= 18;
num *= 10;
num /= 15;

console.log(num);

//-----Задача №2 hw 2_2

// let time = [ 'hour:', 'minute:', 'seconds']

// console.log(time[0] + time[1] + time[2]); 

let hour = 4,
    minute = 30,
    second = 59;
console.log(hour + ':' + minute + ':' + second);


//-----Задача #3 hw 2_2

let str = 'abcde';
if (str[0] == 'a') {
    console.log('да');
} else {
    console.log('нет');
}

//---Задача №4 hw 2_2

str = '«В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек».';
console.log(str.substr(48, 13));

//---Задача № 5 hw 2_2

str = '123';
console.log(str[0] + str[1] + str[2]);

//---Задача №6 hw 2_2

let a = 10;
if ( a == 10) {
    console.log('Верно');
}else {
    console.log('Неверно');
}

//----Задача №7 hw2_2

let y = 'test';
if(y == 'test') {
    alert('Верно');
}else {
    alert('Неверно');
}

//----Задача № 8 hw2_2
let o = 6,
    b = 3;

if (o <= 1 && b >= 3) {
    console.log(o + b);
}else {
    console.log(o - b);
}