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

console.log(Number(str[0]) + Number(str[1]) + Number(str[2]));

//---Задача №6 hw 2_2

let a = 10;
if (a == 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//----Задача №7 hw2_2

let y = 'test';
if (y == 'test') {
    alert('Верно');
} else {
    alert('Неверно');
}

//----Задача № 8 hw2_2
let o = 6,
    b = 3;

if (o <= 1 && b >= 3) {
    console.log(o + b);
} else {
    console.log(o - b);
}

// ----- Задача №9

let name = 'Ваше имя',
    login = 'Введите логин',
    pass = 'Ваш пароль';

if (name == 'admin' && login == 'nimda') {
    prompt('Добро пожаловать!' + name + 'Вы успешно вошли на сайт.');
} else {
    prompt(name + ', вы неверно ввели логин и пароль!');
    console.log(name + ', вы неверно ввели логин и пароль!');
}
//----Задача № 10

let month = 112;

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log('seasonName Зима');
    break;    
    case 3:
    case 4:
    case 5:
        console.log('seasonName Весна');
    break;
    case 6:
    case 7:
    case 8:
        console.log('seasonName Лето');
    break;
    break;
    case 9:
    case 10:
    case 11:
        console.log('seasonName Осень');
    break;
    default:
        console.log('Нет такого сезона');
}