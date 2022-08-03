// let calculator = (a,b) => {
//     let result = a * b;
//     return result;
// }
// console.log(calculator(200,100))

// function cycle(counter) {
//     console.log(counter)
//     counter++;
//     if (counter >= 10){
//         return;
//     }else{
//         cycle(counter)
//     }
//
// }
// cycle(0)

//створити функцію яка буде виставляти рандомні числа від і до
let functionN1 = (minNumber,maxNumber) =>{
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

}
let result =functionN1(prompt('введіть мінімальне число'),prompt('введіть максимальне число'))
document.write(result)