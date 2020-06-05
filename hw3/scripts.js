 //----HomeWork 3

 //----Задача №1
 //a)

 let i = 1;

 while (i <= 50) {
     console.log(i);
     i++;
 }

 //b)
 let a = 35;

 while (a >= 8) {
     console.log(a);
     a--;
 }

 // Задача № 2

 let b = 89;

 while (b >= 11) {
     document.write(b + '<br/>');
     b--;
 }

 // ---Задача № 3
 let a1 = 100;
 let sum = 0;

 for (let i = 0; i <= a; i++) {
     console.log(i);
     sum += i;
 }

 console.log(sum);

 //--- Задача № 4

 let a2 = 5;
 let sum1 = 0;

 for (let i = 1; i <= a2; i++) {
     sum1 = 0;
     for (let f = 1; f <= i; f++) {
         sum1 += f;
     }

     console.log('Sum ' + i + ' = ' + sum1);
 }

 //--- Задача № 5

 num3 = 8;

 do {
     console.log(num3);
     num3 += 2;
 } while(num3 <= 56);
     
 

 for(i = 8; i <= 56; i++) {
     if(i % 2 == 1) continue;
     console.log(i);
 }

 //--- Задача № 6

 for (i = 2; i <= 9; i++) {
     for (let j = 2; j <= 9; j++) {
         let rav = i * j;
         console.log(i + '*' + j + ' = ' + rav)
     }
 }


 //--- Задача № 7

let n = 1000,
    num = 0;
for (; n > 0; ) {
    n /= 2;
    num++;
    if(n < 50) break;
}
console.log(n);
console.log(num);

//--- Задача № 8

let num2,
    suma = 0,
    count = 0,
    aver;
do {
    num2 = parseFloat(prompt('Введите число:'));
    if ( num2 == 0 || num2 == ' ') break;
    suma = suma + num2;
    count++;
} while (num2 >= 0);
   alert ('Сумма введенных чисел' + ' = ' + suma);
   console.log(count);
   aver = suma / count;
   alert ('Среднее арифметическое' + ' = ' + aver);

   //---Задача № 9

   let strNums = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
        min = + strNums[0],
        num4 = ' ',
        max = + strNums[0];
     let i1 = 0;
     for (;; i1++) {
         if (strNums[i1] == strNums.substr[44]) break;
         if (strNums[i1] != ' ') {
             num4 += strNums[i1];
         
         if (+num4 < min) min = +num4;
         if (+num4 > max) max = +num4;
     } else {
           num4 = ' ';
     }
    }
     console.log(min, max);

     //---Задача № 10

     let n5 = 234,
        counDigit = 0,
        dig,
        reverseN = ' ';

    sum = 0;

    while (n5 > 0) {

        dig = n5 / 10;
        n5 = Math.floor(n5 / 10);
        reverseN += dig;
        sum += dig;
        counDigit++;
        console.log('числа на экран ' + dig);
    }

    console.log( 'Количества цифр' + counDigit);
    console.log( 'сумма ' + sum);
    console.log( 'Обратный порядок цифр' + reverseN);

   
    


