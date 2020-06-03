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
    console.log(' Да вот это время было');
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
    console.log(' НЕТ такого не может быть');
}

// -----Задача № 9

let days = prompt('Введите количества дней');

const daysinYear = 365,
      daysinMonth = 31,
      daysinWeek = 7,
      hourinDay = 24,
      minuteinDay = 1440,
      secondinDay = 86400;

let year = days / daysinYear,
    months = days / daysinMonth,
    week = days / daysinWeek,
    hours = days * hourinDay,
    minutes = days * minuteinDay,
    seconds = days * secondinDay;

if (days >= daysinYear) {
    console.log(year, 'год');
    console.log(months, 'месяц');
    console.log(week, 'неделя');
    console.log(hours, 'час');
    console.log(minutes, 'минута');
    console.log(seconds, 'секунда');
} else if (days < daysinYear && days >= daysinMonth) {
    console.log('меньше года');
    console.log(months, 'месяц');
    console.log(week, 'неделя');
    console.log(hours, 'час');
    console.log(minute, 'минута');
    console.log(seconds, 'секунда');
} else if (days < daysinMonth && days >= daysinWeek) {
    console.log('меньше месяца');    
    console.log(week, 'неделя');
    console.log(hours, 'час');
    console.log(minutes, 'минута');
    console.log(seconds, 'секунда');
} else  {
    console.log('меньше недели');    
    console.log(hours, 'час');
    console.log(minutes, 'минута');
    console.log(seconds, 'секунда');
} 

//----Задача №10

let = Junuary,
     February,
    March,
    Aprill,
    May,
    June,
    July,
    August,
    Semtember,
    October,
    November,
    December;

    day = prompt('Введите день от 1 до 365');

    if (day > 1 && day <= 31) {
        day = ' Junuary';
        console.log('Январь - Junuary');
    } else if (day > 31 && day <= 59) {
        day = ' February';
        console.log('Февраль - February');
    } else if (day > 59 && day <= 90) {
        day = '  March';        
        console.log('Март - March');
    } else if (day > 90 && day <= 120) {
        day = '  Aprill'; 
        console.log('Апрель - Aprill');
    } else if (day > 120 && day <= 151) {
        day = ' May'; 
        console.log(' Май - May');
    } else if (day > 151 && day <= 181) {
        day = ' June';
        console.log('Июнь - June');
    } else if (day > 181 && day <= 212) {
        day = ' July';
        console.log('Июль - July');
    } else if (day > 212 && day <= 243) {
        day = ' August';
        console.log('Август - August');
    }  else if (day > 243 && day <= 273) {
        day = ' September';
        console.log('Сентябрь - September');
    } else if (day > 273 && day <= 304) {
        day = ' October';
        console.log('Октябрь - October');
    } else if (day > 304 && day <= 335) {
        day = ' November';
        console.log('Ноябрь - November');
    } else if (day > 335 && day <= 365) {
        day = ' December';
        console.log('Декабрь - December');
    } else {
        console.log(' Наберите еще раз день от 1 до 365. ');
    }

    switch(day) {
        case January:
        case February:
        case December:
            console.log('Зима');
        break;

        case March:
        case Aprill:
        case May:
            console.log('Весна');
        break;

        case June:
        case Julyl:
        case August:
            console.log('Лето');
        break;

        case September:
        case October:
        case November:
            console.log('Осень');
        break;

        default:
            console.log('неправильно ввели число');
        break;
    }



