//1 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let function1 = (array1) => {
//     let sum = 0;
//     for (const arrayElement of array1) {
//         // sum += arrayElement;
//         sum = sum + arrayElement;
//     }
//     return sum/array1.length;
// };
//
// let suma =function1([2,2])
// console.log(suma);


//2 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let function2 = (...arr) => {
//
//     console.log(arr)
//     let minValue = arr[0]
//     let maxValue = arr[0]
//
//     for (let num of arr) {
//         if (num > maxValue) {
//             maxValue = num
//         }
//         if (num < minValue) {
//             minValue = num
//         }
//     }
//     console.log(maxValue)
//     return minValue;
// }
// let result = function2(1, 2, 3, 345, -123, 4343, 4)
// console.log(result)


//3 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let function3 = (arr) => {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random()*100)
//     }
//     return arr
// }
// console.log(function3([]))


// 4- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// let function4 = (arr , lenght,limit) => {
//     for (let i = 0; i < lenght; i++) {
//         arr[i] = Math.round(Math.random()*limit)
//
//     }
// return arr
// }
// console.log(function4([],10,1000))


// 5- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arrNew = []
// let reverse = (arr) => {
//     for (let i = arr.length-1 ; i >= 0 ; i--){
//         arrNew.push(arr[i])
//     }
// }
// reverse([1,2,3])
// console.log(arrNew)

// Переробити на стрілочні функції з попереднього дз

//1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let first_function = (a,b) =>{
//     return a * b
// }
// console.log(first_function(10,12))


//2- створити функцію яка обчислює та повертає площу кола з радіусом r
//  let second_function = (r) =>{
//
//     return r*3.14*2
//  }
// console.log(second_function(10))
//


//3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let third_function = (r,h) =>{
//     return 2 * 3.14*r*h
// }
// console.log(third_function(5,3))


//4- створити функцію яка приймає масив та виводить кожен його елемент
// let fourth_function = (arr) =>{
//     for (let argument of arr) {
//         console.log(argument)
//     }
// }
// let array1 = ['hello',26,true,]
// fourth_function(array1)


//5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let fifth_function = (a) =>{
//     document.write(`<ul>`)
//         document.write(`<li>${a}</li>`)
//
//         document.write(`</ul>`)
// }
// fifth_function('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque eius laborum magni nihil')


// 6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let sixth_function = (a) => {
//     document.write(`<ul>`)
//       document.write(`<li>${a}</li>`)
//       document.write(`<li>${a}</li>`)
//       document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
//
// }
// sixth_function('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad animi assumenda atque')


// 7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let seventh_function = (text,sum) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < sum; i++) {
//      document.write(`<li>${text}</li>`)
//
//     }
//
//         document.write(`</ul>`)
// }
// seventh_function(`first_word`,3)


// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let massive1 = [21,'object' ,' apple',25];
let eighth_function = (arg) => {
    document.write(`<ul>`);
    for (const aElement of arg) {
        document.write(`<li>${aElement}</li>`)
    }
    document.write(`</ul>`);
}
eighth_function(massive1)


// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
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
// let nineth_function =(arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// nineth_function(array1);


//10- створити функцію яка повертає найменьше число з масиву
// let numbers = [4,6,-9,13]
// lettenth_function =(arr) => {
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

