/* 1Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа
передаются параметром.*/

function getParameter(a, b, c) {
    return (a-b) / c;
}
console.log(getParameter(45, 8, 4));

/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается
параметром.*/

function getKvadraKub(j) {
    kub = j * j;

    kvadrat = j * j * j;

    return [kub, kvadrat];
}

console.log(getKvadraKub(3));

/*3. Напишите функции min и max, 
которые возвращают меньшее и большее из чисел a и b.*/

function min(a, b) {
    if (a < b) {
        return a;
    }else {
        return b;
    }
}
 function max(a, b) {
     return a > b ? a : b;
 }

 console.log(min(3, 2));
 console.log(max(7, 3));

 /*4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми
значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая
– выводить полученный массив.*/

let arr = [];

function backArr(arr) {
    let one = +prompt('Введите числа первого диапозона'),
        next = +prompt('Введите числа для второго диапозона');

    if (one < next) {
        min = one;
        max = next;
    }else {
        max = one;
        min = next;        
    }
    let interm = one;

    for (i = 0; i <= max - min; i++) {
        arr.push(interm);
        if (one > next) interm--;
        else interm++;
    }
}

function printArr(arr) {
    console.log(arr);
}
backArr(arr);
printArr(arr);

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
если нечетное - false.*/

function isEven(num) {
    if (num > 0 && num % 2 == 0) return true;
    else return false;
  }

console.log(isEven(33));

/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый
массив, где останутся лежать только четные из этих чисел. Для этого используйте
вспомогательную функцию isEven из предыдущей задачи.*/

let arr1 = [3,5,9,8,0,23,4,31,56];

function returnArrEven(x) {
    let newArr = [];

    for (let i = 0; i < x.length; i++) {
        if (isEven(x[i])) {
            newArr.push(x[i]);
        }
    }

    return newArr;
}

console.log(returnArrEven(arr1));

/*Напишите ф-цию, которая рисует 
следующую пирамидку (исп. вложенные циклы):*/

function showTriangle(a,b){

    let str = [];

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= a; j++) {

            if (b == undefined) {
                if (j <= i) str.push(i);
         }else {
             if (j <= i) str.push(b)

         }
        }
        console.log(str.join(''));
    }
}
showTriangle(5);

/*8. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до
1000.*/

function getArrFibonachi() {

    let arrFibonachi = [0,1];

    for (let i = 2; i <17; i++) {
        arrFibonachi[i] = arrFibonachi[i - 1] + arrFibonachi[i - 2];
    }
    return arrFibonachi;
}
showFunction = getArrFibonachi();
console.log(showFunction);

/*Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию.*/

let num = 915,
    sum = 0;

function addSum() {

    num = String(num);

    for (let i = 0; i < num.length; i++) {
        sum += +num[i];
    }
    console.log(sum);
    if (sum > 9) {
        num = sum;
        sum = 0;
        addSum()
    }
}
addSum();
/*10. Дан массив с числами (передается параметром). Выведите последовательно его
элементы, используя рекурсию и не используя цикл.*/

let b = 0;

function outputArr(a) {
    console.log(a[b]);
    if ( b < a.length - 1) {
        b++;
        outputArr(a);
        
    }
}
outputArr( [23,4,2,3,5,6]);