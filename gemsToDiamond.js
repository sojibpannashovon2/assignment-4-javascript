// In this function we will convert gems to diamond
function gemsToDiamond(num1, num2, num3) {


    const firstFriendGems = 21;
    const secondFriendGems = 32;
    const thirdFriendGems = 43;

    const totalDiamond = num1 * firstFriendGems + num2 * secondFriendGems + num3 * thirdFriendGems;

    if (totalDiamond > 2000) {
        const remainigDiamond = totalDiamond - 2000;
        return remainigDiamond;
    }
    else if (totalDiamond < 2000) {
        return totalDiamond;
    }

}
const result = gemsToDiamond(100, 5, 1)
console.log(result);