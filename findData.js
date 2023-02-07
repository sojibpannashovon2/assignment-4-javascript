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