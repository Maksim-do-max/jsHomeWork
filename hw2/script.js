//-----Задача №1
let names = 'ваше имя ?';
prompt('names');

let age = 'возраст ?';
prompt('age');

let city = 'город проживания ?';
prompt('city');

let phone = 'какой ваш номер телефона ?';
prompt('phone');

let email = 'ваш email адресс ?';
prompt('email');

let company = 'ваша компания в которой вы работаете ?';
prompt('company');

console.log('Меня зовут' + name + '. Мне ' + age + ' лет. Я проиваю в городе ' + city + ' и работаю в компании ' +
 company + ' Мои контактные данные: ' + phone + ',' + email + '.');

 //------ Задача № 2

 let nowaDays = 2020,
     birthYear = nowaDays - age;

    console.log(name + ' родился в ' + birthYear + ' году');

// ---- Задача № 3

let str1 = '123456',
    w = (Number(str[0]) + Number(str[1]) + Number(str[2])),
    c = (Number(str[3]) + Number(str[4]) + Number(str[5]));

if (w == c) {
    console.log('Да');
} else {
    console.log('Нет');
}

//---- Задача № 4

let h = 1;

(h > 0) ? console.log('Верно')
        : console.log('Неверно');

//---- Задача № 5

let q = 10,
    u = 2;
    console.log(q + u);
    console.log(q * u);
    console.log(q - u);
    console.log(q / u);
(q + u > 1) ? console.log((q + u) * (q + u))
            : console.log(q + u < 1);

// ---- Задача № 6

if (u >= 6 && u < 14 || q > 2 && q < 11) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//--- Задача № 7

let t = 59;

if (t >= 0 && t < 15) {
    console.log(' в первую четверть');
} else if (t >= 15 && t < 30)  {
    console.log(' в вторую');
} else if (t >= 30 && t < 45)  {
    console.log(' в третью');
} else if (t >= 45 && t< 59) {
    console.log(' в четвертую');
} else {
    console.log(' Да вот это время было')
}  

//---- Задача № 8

let day = 32

if (day >= 1 && day < 11) {
    console.log(' в первую декаду месяца');
} else if (day >= 11 && day < 21)  {
    console.log(' в вторую декаду месяца');
} else if (day >= 21 && day <= 31)  {
    console.log(' в третью декаду месяца');
} else {
    console.log(' НЕТ такого не может быть')
}

// -----Задача № 9




