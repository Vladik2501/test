
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

 let number1 = prompt('Введіть номер квартири');
 if (number1 >= 0 && number1 <= 20) {
console.log('Вказана квартира знаходиться у 1 підїзді')
 } else if (number1 >= 21 && number1 <= 48) {
  console.log('Вказана квартира знаходиться у 2 підїзді')
 } else if (number1 >= 49 && number1 <= 90) {
   console.log('Вказана квартира знаходиться у 3 підїзді')
 }else { 'ви ввели щось не те'}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

 let number = 1;
 if(number === 10){
     console.log('ВІРНО')
 }else{
    console.log('НЕ ВІРНО')
}


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

 let weather = prompt('Яка температура на вулиці? Введіть число')
 if (weather >= 10 && weather <= 22) {
    console.log('Я іду в октен')
     document.write(' Я поїду в октен')
} else {
     console.log('буду вчитися вдома')
 }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

 let victorina = prompt("Введите число от 1 до 5");
switch(victorina)
{
    case 1: victorina = 1
        alert("Вітаємо! Ви виграли автомобіль!!!");
        break;
    case 2:
       alert("Вітаємо! Ви виграли телефон!!!");
         break;

   case 3:
       alert("Вітаємо! Ви виграли самокат!!!");
         break;
     case 4:
       alert("Вітаємо! Ви виграли гіроборд!!!");
       break;
    case 5:
       alert("Ви ввели не те число...До побачення.");

    default:
        alert("Ви ввели щось не те...До побачення.")
 }