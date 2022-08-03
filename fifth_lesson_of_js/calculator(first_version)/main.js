// Примітивний калькулятор створений завдяки стрілковій функції

let calculator = (num1, symbol, num2,) => {
    let result;

    switch (symbol) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('ви ввели щось не те')
    }
    return result
}
let res = calculator(prompt('введіть 1 число')  ,prompt('введіть символ'),prompt('введіть 2 число'))
document.write(res)
