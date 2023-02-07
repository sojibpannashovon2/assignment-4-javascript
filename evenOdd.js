
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