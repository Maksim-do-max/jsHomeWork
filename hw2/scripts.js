//-----Задача №1

let num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num ++;
    num --;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    
console.log(num);

//-----Задача №2

let time = [ 'hour:', 'minute:', 'seconds']

console.log(time[0] + time[1] + time[2]); 

//-----Задача #3

let str = 'abcde';
if (str[0] == 'a') {
    console.log('да');
} else {
    console.log('нет');
}

//---Задача №4

str = '«В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек».';
  console.log(str.substr(48,13)) ;
