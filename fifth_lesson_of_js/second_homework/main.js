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
//
//     for (let i = 0; i < 50; i + 2) {
//         arr1.push(Math.round(Math.random() * 100));
//     }
//     document.write('<br>' + arr3);
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

