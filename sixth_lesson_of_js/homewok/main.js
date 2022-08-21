//homework
let num1 = 'hello world';
let num2 = 'lorem ipsum';
let num3 = 'javascript is cool'

//1 - Знайти та вивести довижину настипних стрінгових значень  'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(num1.length)
// console.log(num2.length)
// console.log(num3.length)

// 2  Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(num1.toUpperCase())
// console.log(num2.toUpperCase())
// console.log(num3.toUpperCase())

// 3  Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(num1.toLowerCase())
// console.log(num2.toLowerCase())
// console.log(num3.toLowerCase())

// 4 - Є "брудна" стрінга let str = '  dirty string   ' . Почистити її від зайвих пробілів.
// let str = '  dirty string  ';
// console.log(str.trim())

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str);['Ревуть', 'воли', 'як', 'ясла', 'повні']
// //
// let split = str.split(' ');
// console.log(split)

// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0]
let stringCretor = arr.map((item)=>{
    return (item.toString())
})
console.log(stringCretor);

// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function sortNums2(arr,direction) {
//     arr.sort((a,b) => {
//         if (direction === 'descending'){
//             return a - b;
//         }else if (direction === 'ascending'){
//             return b - a;
//         }
//     })
//     return arr
// }
//
// console.log(sortNums2(nums,'ascending'))

// 8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// coursesAndDurationArray.sort((object1,object2) => object1.monthDuration - object2.monthDuration)
// coursesAndDurationArray.filter(value => value.monthDuration > 5)
// console.log(coursesAndDurationArray)

// 9 описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
// let deckOfCards = [
//     {value: 6, cardSuit: 'spade', color: 'black'},
//     {value: 6, cardSuit: 'diamond', color: 'red'},
//     {value: 6, cardSuit: 'heart', color: 'red'},
//     {value: 6, cardSuit: 'clubs', color: 'black'},
//
//     {value: 7, cardSuit: 'spade', color: 'black'},
//     {value: 7, cardSuit: 'diamond', color: 'red'},
//     {value: 7, cardSuit: 'heart', color: 'red'},
//     {value: 7, cardSuit: 'clubs', color: 'black'},
//
//     {value: 8, cardSuit: 'spade', color: 'black'},
//     {value: 8, cardSuit: 'diamond', color: 'red'},
//     {value: 8, cardSuit: 'heart', color: 'red'},
//     {value: 8, cardSuit: 'clubs', color: 'black'},
//
//     {value: 9, cardSuit: 'spade', color: 'black'},
//     {value: 9, cardSuit: 'diamond', color: 'red'},
//     {value: 9, cardSuit: 'heart', color: 'red'},
//     {value: 9, cardSuit: 'clubs', color: 'black'},
//
//     {value: 10, cardSuit: 'spade', color: 'black'},
//     {value: 10, cardSuit: 'diamond', color: 'red'},
//     {value: 10, cardSuit: 'heart', color: 'red'},
//     {value: 10, cardSuit: 'clubs', color: 'black'},
//
//     {value: 'ace', cardSuit: 'spade', color: 'black'},
//     {value: 'ace', cardSuit: 'diamond', color: 'red'},
//     {value: 'ace', cardSuit: 'heart', color: 'red'},
//     {value: 'ace', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'jack', cardSuit: 'spade', color: 'black'},
//     {value: 'jack', cardSuit: 'diamond', color: 'red'},
//     {value: 'jack', cardSuit: 'heart', color: 'red'},
//     {value: 'jack', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'queen', cardSuit: 'spade', color: 'black'},
//     {value: 'queen', cardSuit: 'diamond', color: 'red'},
//     {value: 'queen', cardSuit: 'heart', color: 'red'},
//     {value: 'queen', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'king', cardSuit: 'spade', color: 'black'},
//     {value: 'king', cardSuit: 'diamond', color: 'red'},
//     {value: 'king', cardSuit: 'heart', color: 'red'},
//     {value: 'king', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'joker', color: 'black'},
//     {value: 'joker', color: 'red'},
// ];
// let Cards = (array) => {
//     let s =  array.reduce((accum, x) => {
//         if (x.value === 'ace' && x.cardSuit === 'spade') {
//             accum.spadeBlackAce.push(x)
//         }else
//         if (x.value === 6) {
//             accum.six.push(x)
//         }else
//         if (x.cardSuit === 'heart') {
//             accum.heart.push(x)
//         }else
//         if (x.cardSuit === 'diamond') {
//             accum.diamonds.push(x)
//         }else
//         if (x.cardSuit === 'clubs' && x.value !== 6 && x.value !== 7 && x.value !== 8) {
//             accum.clubs.push(x)
//         }
//         return accum
//     }, {spadeBlackAce: [], six: [], heart: [], diamonds: [], clubs:[]})
//     console.log(s);
// }
// Cards(deckOfCards);


