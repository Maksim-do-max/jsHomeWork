/* Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
***************************** */

function showTable(length) {
    let frame = ' ';
    for (let i = 0; i < length; i++) {
        frame += '*';
    }
    console.log(frame);
}

let lines = [],
    name = prompt('Введите ваше имя'),
    surname = prompt('Введите ваше Фамилие'),
    patronymic = prompt('Введите ваше отчество'),
    groupnumber = prompt('Номер группы'),
    allName = surname + ' ' + name + ' ' + patronymic;
lines.push('Домашняя работа:"Функции"');
lines.push('Выполнил студент гр.' + groupnumber);
lines.push(allName);

let framelength = 0;
for (let i = 0; i < lines.length; i++) {
    if (framelength < lines[i].length) {
        framelength = lines[i].length;
    }
}

framelength += 2;

showTable(framelength);
for (let i = 0; i < lines.length; i++) {
    let resultString = "*";

    for (let j = 0; j < framelength; j++) {
        if (lines[i][j] === undefined) {
            if (j === framelength - 2) {
                resultString += '*';
            } else {
                resultString += ' ';
            }
        } else {
            resultString += lines[i][j];
        }
    }
    console.log(resultString);
}
showTable(framelength);

/*2. Напишите ф-цию, которая рисует равнобедренный 
треугольник из звездочек:*/

function triangle() {
    let str = [];
    input = +prompt('Введите количество рядов');

    for (let i = 0; i <= input; i++) {

        for (let j = 0; j < input + i; j++) {
            if (j <= input - 1) str.push(' ');
            else str.push('*');
        }

        console.log(str.join(''));
        str = [];
    }
}
triangle();

function triangleReverse() {

    let str = [];
    input = +prompt('Введите количество рядов');

    for (let i = input; i >= 0;  i--) {

    for (let j = 0; j < input + i; j++) {
        if (j <= input - 1) str.push(' ');
        else str.push('*');
    }

    console.log(str.join(''));
    str = [];
}

}

triangleReverse();