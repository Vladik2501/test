//Homework

//1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
//
// }
//     let xxx = new User(2561,'VLados','junior','bbbgmail',6)
// //
// let arr1 = [];
// for (let i = 0; i < 10; i++) {
//    arr1[i] = xxx
// }

// 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// if (arr1[i] % 2) {
//     console.log(arr1[i])
// }

//3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// arr1.sort((object1,object2) => object1.index > object2.index)
// console.log(arr1)

//4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id,name,surname,email,phone,order) {
//     this.id = id;
//     this.name = name;
// this.surname =surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// let arr2 = [];
// let xxx2 = new Client(2561,'VLados','junior','bbbgmail',6,1)
// for (let i = 0; i < 10; i++) {
//     arr2[i] = xxx2
// }

// 5 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,manufacturer,release_date,max_speed,engine_capacity,now_speed,) {
this.model = model;
    this.manufacturer =manufacturer;
    this.release_date = release_date;
    this.max_speed = max_speed;
    this.engine_capacity = engine_capacity;
this.now_speed = now_speed;
this.greeting1 = function drive () {
    console.log(`їдемо зі швидкістю ${this.now_speed} на годину`)
};
}

let car1 = new Car('s-class','mercedes','2019 year','240km','45liters','120km')
console.log(car1)