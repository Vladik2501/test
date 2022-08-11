// Homework

// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function num1(a,b) {
//     return a * b
// }
// console.log(num1(4,6))
// let num2 = (a,b) => a * b;
// console.log(num2(4,6))

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// function num3(p,r) {
//     return p * (r * 2)
// }
//
// console.log(num3(3.14,6))
// let num4 = (p,r) => p * (r*2);
// console.log(num4(3.14,6))

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//2πRH , де R — радіус циліндра, H — висота циліндра.
// function num5(p,r,h) {
//     return (p * 2) * r * h
// }
// console.log(num5(3.14,5,12))
// let num6 = (p,r,h) => (p*2) * r * h;
// console.log(num6(3.14,5,12))

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// let array = ['apple','banan','grapefruit','grape','lemon',`orange`]
// function num7(array) {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement)
//     }
//     return array
// }
// // console.log(num7(array))
// let num8 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement)
//     }
//     return array
// }
// console.log(num8(array))

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function num9(txt) {
//     document.write(`<h2>${txt}</h2>`)
//
// }
// num9('lorem ipsum dolor alet pur telop')
// let num10 = (txt) => {
//     document.write(`<h2>${txt}</h2>`)
// }
// num10('lorem ipsum dolor alet pur telop')

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function num11(txt2) {
//     document.write(`<ul>`)
//     document.write(`<li>${txt2}</li>`)
//     document.write(`<li>${txt2}</li>`)
//     document.write(`<li>${txt2}</li>`)
//     document.write(`</ul>`)
// }
// num11('lorem')
// let num12 = (txt2) => {
//     document.write(`<ul>`)
//     document.write(`<li>${txt2}</li>`)
//     document.write(`<li>${txt2}</li>`)
//     document.write(`<li>${txt2}</li>`)
//     document.write(`</ul>`)
// }
// num12('lorem')

// 7 - творити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function num13(txt3,sum) {
//     document.write(`<ul>`)
//     for (let i = 0; i < sum; i++) {
//      document.write(`<li>${txt3}</li>`)
//     }
//         document.write(`</ul>`)
// }
// num13(`apple`,3)
// let num14 =(txt,sum) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < sum; i++) {
//         document.write(`<li>${txt3}</li>`)
//     }
//     document.write(`</ul>`)
// }
// num14(`apple`,3)

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let massive1 = [21,'object' ,' apple',25];
// function num15(arg) {
//     document.write(`<ul>`);
//     for (const aElement of arg) {
//         document.write(`<li>${aElement}</li>`)
//     }
//     document.write(`</ul>`);
// }
// num15(massive1)
// let num16 = (arg) => {
//     document.write(`<ul>`);
//     for (const aElement of arg) {
//         document.write(`<li>${aElement}</li>`)
//     }
//     document.write(`</ul>`);
// }
// num16(massive1)

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let array1 = [
//     {
//         id: '1234',
//         name: 'first_item',
//         age: 10
//     },
//     {
//         id: '4321',
//         name: 'second_item',
//         age: 11
//     },
//     {
//         id: '3241',
//         name: 'third_item',
//         age: 12
//     }
// ]
// function num17(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// num17(array1);
//  let num18 = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// num18(array1);

// 10 - створити функцію яка повертає найменьше число з масиву
// let numbers = [4,6,-9,13]
// function num19(arr) {
//     let min_element = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min_element) {
//             min_element = arrElement
//         }
//     }
//     return min_element
// }
// console.log(num19(numbers))
// let numbers = [4,6,-9,13]
// let num20 =(arr) => {
//     let min_element = arr[0];
//
//     for (const arrElement of arr) {
//         if (arrElement < min_element) {
//             min_element = arrElement
//         }
//     }
//     return min_element
// }
// console.log(tenth_function(numbers))

// 11 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function num21(array) {
//         let suma = 0;
//     for (const arrayElement of array) {
//         suma += arrayElement;
//     }
//     return suma;
// }
// let sume = num21([10,20,30])
// document.write(sume)
// let num22 = (array) => {
//     let i = 0;
//     for (const arrayElement of array) {
//         i += arrayElement;
//     }
//     return i;
// }
// let sume = num21([10,20,30])
// document.write(sume)
//
