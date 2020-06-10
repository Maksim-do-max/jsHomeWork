//-----Задача №1

let arr = [1, 2, 3, 4, 5];
    
for(let i = 0; i <= arr.length - 1; i++) {
    document.write(arr[i], '<br />');
    console.log(arr[i])
}


//-----Задача № 2

let arr1 = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];

for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] < -3 && arr1[i] > -10) 
        console.log(arr1[i]);
}

//-----Задача № 3

let i = 23;
let arr2 = [],
    result = 0;


while(i <= 57) {
   arr2.push(i);
   i++;
}
console.log(arr2)

arr2 = [];

for (let i = 23; i<= 57; i++) {

    arr2.push(i);
    result += i;
}

console.log(arr2);
console.log(result);

//----Задача№ 4

let arr3 = ['10', '20', '30', '50', '235', '7000'];

for(let i = 1; i < arr3.length; i++){
    if(arr3[i][0] >= '1' || arr3[i][0] <= '2' || arr3[i][0] >= '5') 
    console.log([i]);
}

//----Задача№ 5

let arrWeek = ['Пн', 'Вт', 'Ср', 'Чет', 'Пят', 'Субб', 'Вс'];
let str;
for(let i = 0; i < 7; i++) {
    if(arrWeek[i] == 'Субб' || arrWeek[i] == 'Вс') {
        document.write(arrWeek [i].bold() + ' ');
       
    } else {
        document.write(arrWeek[i] + ' ');
    }
}

//----Задача№ 6

let arrMix = ['str', 123, 'apple', 0, true];

arrMix[arrMix.length] = 45;
console.log(arrMix);
console.log(arrMix[1, 0, arrMix.length - 1]);

//----Задача№ 7

let arr4 = [];
        
for(let i = 0; i < 999; i++) {
    arr4[i] = prompt('Введите число');    
    if(arr4[i] == '') break;
    arr4[i] = +arr4[i];
}
console.log(arr4);

arr4.sort(function(a, b){
    return a - b;
});
console.log(arr4);

//----Задача№ 8

let arr5 = [12, false, 'Текст', 4,2,-5,0];

i = arr5.length - 1;

while(i >= 0) {
    console.log(arr5[i]);
    i--;
}

console.log(arr5.reverse());

//----Задача№ 9

let arr6 = [5,9,21,,,9,78,,,,6];
c = 0;

for(let i = 0; i < arr6.length; i++) {
    if(arr6[i] == undefined) c++;
}
console.log(c);

//----Задача№ 10

let arr7 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,0,2],
    sum = 0;
let arr7fin = arr7.slice(arr7.indexOf(0) + 1, arr7.lastIndexOf(0));

if(arr7fin == []) {
    console.log(0);
} else {
    for(let i = 0; i < arr7fin.length; i++) {
        sum += arr7fin[i];
}
}
console.log(sum);