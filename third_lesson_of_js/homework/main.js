// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calculator_of_area(a, b) {
//     return a * b
// }
// document.write(calculator_of_area(2,2))

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calculator_of_area2(p,k) {
//    return p * k
// }
// document.write(calculator_of_area2(3.14,3))

// 3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calculator_of_area(p,r,h) {
//     return  2 * p * r * h
// }
// document.write(calculator_of_area(3.14,10,15))

// 4- створити функцію яка приймає масив та виводить кожен його елемент
// function array_elements(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// let array1 = ['hello',26,true,]
// array_elements(array1)

//5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text_creator(a) {
//
//     document.write(`<ul>`)
//         document.write(`<li>${a}</li>`)
//
//         document.write(`</ul>`)
//
// }
//
// text_creator('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, voluptas.')

//6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function text_creator(b) {
//
//     document.write(`<ul>`)
//         document.write(`<li>${b}</li>`)
//     document.write(`<li>${b}</li>`)
//     document.write(`<li>${b}</li>`)
//         document.write(`</ul>`)
//
// }
//
// text_creator('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, voluptas.')

//7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function text_creator2(textLi,sumLi) {
//     document.write(`<ul>`)
//     for (let i = 0; i < sumLi; i++) {
//      document.write(`<li>${textLi}</li>`)
//
//     }
//
//         document.write(`</ul>`)
// }
// text_creator2(`first_word`,3)

//8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),та будує для них список
// let users = [25,'object1',true,false,'object2'];
// function arr(a) {
//         document.write(`<ul>`);
//         for (const item of a) {
//             document.write(`<li>${item}</li>`)
//         }
//         document.write(`</ul>`);
// }
// arr(users)

//9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
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
// function arr(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// arr(array1);
//

//10 - створити функцію яка повертає найменьше число з масиву
// let numbers = [-9, 2, -900]
// // function arr_numbers(arr) {
// //     let min_element = arr[0];
// //
// //     for (const arrElement of arr) {
// //         if (arrElement < min_element) {
// //             min_element = arrElement
// //         }
// //     }
// //     return min_element
// // }
// // console.log(arr_numbers(numbers)
// function arr_numbers(arr) {
//     let min_element = arr[0]
//     for (const minElementElement of arr) {
//         if (minElementElement < min_element) {
//             min_element = minElementElement
//         }
//     }
//     return min_element
// }
//
// console.log(arr_numbers(numbers))