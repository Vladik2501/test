//     function ListCreator( a , b, c) {
//     document.write(`<ul>`)
//         document.write(`<li>${a}</li>`)
//         document.write(`<li>${b}</li>`)
//         document.write(`<li>${c}</li>`)
//         document.write(`</ul>`)
//     }
// ListCreator(`iTEM1`,`ITEM2`,`ITEM3`)
//
//     let f1 = ['1,3,4,6,8'];
//
// let f2 = ['First_Item,Second_Item,Third_Item']
//
//     let f3 = [true,false,undefined]
//
//     function itteratorArray(arr) {
//         for (const arrElement of arr) {
//             console.log(arr)
//         }
//     }
//
//     itteratorArray(f3)
//     itteratorArray(f1)
//     itteratorArray(f2)
//
//
//     function arrayCreator(a,b,c) {
//         let arr1 = [a,b,c]
//         return arr1
//     }
// let array1 =arrayCreator(223,449,220)
//     console.log(array1)
//     let array2 =arrayCreator(643,729,110)
//     console.log(array2)
//     let array3 =arrayCreator(443,529,626)
//     console.log(array3)
//
//     function checkCreator(arrayOfOrderdFood) {
//         arrayOfOrderdFood.push('new')
//         return arrayOfOrderdFood
//     }
//   let check  =  checkCreator(['meet','beer','salat'])
//     console.log(check)

// function DivCreator(couter) {
//     for (let i = 0; i < couter; i++) {
// document.write(`<div>test</div>`)
//     }
// document.write('<hr>')
// }
// DivCreator(20)
// DivCreator(20)
// DivCreator(20)

// function summary(arrayChecks) {
//     let result = 0;
//     for (const check of arrayChecks) {
// result = result + check
//     }
//     return result;
// }
// let summary1 = summary([250 + 150 + 350])
// console.log(summary1)
// let summary2 = summary([100 + 240 +499])
// console.log(summary2)
//
// function calculator() {
//     arguments
//     console.log(arguments)
// }
// calculator(1,3,7,9)