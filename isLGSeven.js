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
