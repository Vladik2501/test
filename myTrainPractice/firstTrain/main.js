// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let user of users) {
//     if (user.age < 30 && user.status === true){
//         console.log(user)
//     }
// }
// function Car(model, manufacturerCompany, release_date) {
//     this.model = model;
//     this.manufacturer = manufacturerCompany;
//     this.release_date = release_date
// }
//
// let xxx = new Car('s-class', 'Mercedes-bens',)
// console.log(xxx)

// / 9 описати колоду карт
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
// for (let card of deckOfCards) {
//     if (card.value === 'ace' && card.cardSuit === 'spade'){
//         console.log(card)
//     }else if (card.value === 6){
//         console.log(card)
//     }else if (card.color === "red"){
//         console.log(card)
//     }else if (card.cardSuit === 'diamond'){
//         console.log(card)
//
//     }else if (card.cardSuit === 'clubs' && card.value !== 6 && card.value !== 7 && card.value !== 8){
//         console.log(card)
//     }
// }


function func1(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum = sum + i;

    }
    console.log(sum)
}

func1(1, 365)
let func2 = (num3, num4) => {
    let sum2 = 0;
    for (let i = num3; i <= num4; i++) {
        sum2 = sum2 + i;
    }
    console.log(sum2)

}
func2(1,1000)