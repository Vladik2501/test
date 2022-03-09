// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let massive = [ 1,2,3,4,5,6,7,8,9,10];
let result = massive;
console.log(result);
//Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    name: 'Harry Potter',
    quantity_of_pages: 350,
    genre: 'fantasy',
    author: 'Joan Katling Roling'
}
let book2 = {
    name: 'Sherlock Holmes',
    quantity_of_pages: 250,
    genre: 'detective',
    author: 'Arthur Conan Doyle'
}
//Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books=[book2, book1];
console.log(arr[0]);
console.log(arr[1]);

//Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let width = 23;
let height = 10;
let s = width * height;
console.log(s)
//Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heighC = 10;
let dC = 4;
let p = 3.14;
let v = p * 2**2 * heighC ;
console.log( v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n=3;
let m=4;
let k=((n**2)+(m**2))**1/2;
console.log(k)