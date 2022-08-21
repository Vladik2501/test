//.....homework.....

// 1 - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function num1() {
//     console.log(arguments)
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let argument of arguments) {
//         if (argument > max) max = argument
//         if (argument < min) min = argument
//     }
//     console.log('max',max)
//     return min
// }
// let min = num1( 14,5, 6 ,3, 5, 63)
// console.log('min',min)

// 2 - Створити функцію яка приймає  пустий масив та :
//  //        a. заповнює його 50 парними числами за допомоги циклу.
//  //        b. заповнює його 50 непарними числами за допомоги циклу.
//  //        c. заповнює масив 20ма рандомними числами. (Google: Generate random number JS)
//  //        d. заповнює масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//A
// function numA() {
//     let arr3 = [0];
//     for (let i = 0; i < 50; i++) {
//         const arr3Element = arr3[i];
//         if (arr3Element/2){
//             arr3Element.push(Math.round(Math.random() * 50));
//         }
//     }
//     return arr3Element
// }
// numA()
//C
// function numC() {
//     let arr1 = [0]
//     for (i = 0; i < 20; i++) {
//         arr1.push(Math.round(Math.random() * 100));
//     }
//     document.write('<br>' + arr1);
//
// }
// numC()
//D
// function numD() {
//     let arr2 = [0]
//     let max =732;
//     let min = 8;
//     for (i = 0; i < 20; i++) {
//         arr2.push(Math.round(Math.random() * (max - min + 1)) + min);
//     }
//     document.write('<br>' + arr2)
//
// }
// numD()

// 3 //   Взяти з попереднього завдання будь який уже наповнений масив і Вивести за допомогою console.log кожен третій елемен
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
// for (let i = 0; i < array.length; i+=3) {
//     console.log(array[i])
// }

//   Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < array.length; i+=3) {
//    if (array[i] % 2 ===0){
//    }
//     console.log(array)
// }

//Створити функцію яка риймає  масив: [ 'h', 'e', 'l', 'l', 'o', ' ' , 'w','o','r','l','d'] .
// I За допомогою циклу for зібрати всі букви в слово.
// let array =[ 'h', 'e', 'l', 'l', 'o', ' ' , 'w','o','r','l','d']
// let  str = "";
// function number1() {
//     for (i = 0; i < array.length; i++){
//         str = str + array[i];
//     }
//     console.log(str);
//
// }
// number1()

//Створити функцю яка примйає  масив [2,17,13,6,22,31,45,66,100,-18] :
// перебрати його циклом for та вивести  числа тільки з непарним індексом
// перебратийого  циклом for та вивести  числа тільки парні  значення
// замінити кожне число кратне 3 на слово "okten"
// let arrOfNUm = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrOfNUm.length; i++) {
//    if (i % 2 !== 0 ){
//        console.log(i)
//    }
//
// }
// for (let i = 0; i < arrOfNUm.length; i++) {
//     if (arrOfNUm[i] % 2 === 0 ){
//         console.log(arrOfNUm[i])
//     }
//
// }
// for (let i = 0; i < arrOfNUm.length; i++) {
//        if (i % 3 === 0){
//           arrOfNUm[i] = 'okten'
//
//        }
//     console.log(arrOfNUm[i])
//
// }

