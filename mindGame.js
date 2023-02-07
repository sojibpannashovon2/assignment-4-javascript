// In this function we will do some arithmetic operation.

function mindGame(number) {
    if (typeof number != 'number') {
        return "Please enter a  number";
    }

    const multipi = number * 3;
    const add = multipi + 10;
    const divide = add / 2;
    const result = divide - 5;
    return result;

}
// const num = 33;
// const positiveNumber = mindGame(num);
// console.log(positiveNumber);