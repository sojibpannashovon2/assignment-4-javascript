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


//  In this function we will find even or odd from a string

function evenOdd(string) {
    if (typeof string != 'string') {
        return "Please enter a  string";
    }
    else {
        const number = string.length;
        if (number % 2 == 0) {
            return "even";
        }
        else {
            return "odd";
        }
    }
}
// const anString = 'chatgpt';
// const isItEvenOrOdd = evenOdd(anString);
// console.log(isItEvenOrOdd);

// In this function find a greater or less value than 7

function isLGSeven(number) {
    if (typeof number != 'number') {
        return "Please enter a  number";
    }
    else {
        const inputToSevenDiff = number - 7;
        if (inputToSevenDiff < 7) {
            return inputToSevenDiff;
        }
        else {
            return number * 2;
        }
    }
}
// const num = -15;
// const result = isLGSeven(num);
// console.log(result);


// In this function we will find bad data, means (negative value).

function findingBadData(array) {
    if (!Array.isArray(array)) {
        return "Please enter an Array";
    }

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const data = array[i];
        if (data < 0) {
            count++;
        }
    }
    return count;
}


// const arrayData = [-4, -9, -5, -33, -55];
// const result = findingBadData(arrayData);
// console.log(result);