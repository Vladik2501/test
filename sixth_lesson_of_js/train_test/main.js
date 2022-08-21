let str = 'hello okten';
// console.log(str.toUpperCase())  - виведення всього капсом
// console.log(str.toLowerCase()) - виведення всього з малої букви
// str.startsWith('k',3) - дозволяє нам задати умови
// str.endsWith('k',3) - те саме що і startsWith тільки з кінця
// str.substring(1,4) - для того щоб виділити певний сегмент і
let str2 = 'vasya-31'
// let strTyre = str2.indexOf('-');
// str2.substring(0,strTyre)
let arr = []
// arr.push('qwe') -добавлення в кінці масиву
// arr.pop() - забирає останній елемент з масиву
// arr.unshift('asd') - добавлення на початок масиву
// arr.shift(arr) - видаляє перший елемент
// arr.splice() - видалення у заданому сигменті з можливістю добавлення іншого елемента в замін
// arr.concat(1,3,4) -  добавляє в кінець вказаний масив

// let arar = function (x) {
//     console.log('hello',x)
// }
// // users.forEach(arar)
// let filter = user.filter( function (value ){
//     return value.status
// })
let map = users.map(value => value.age);
console.log(map)