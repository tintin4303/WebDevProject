function getMilk(money){
    var price = 1.5;
    var bottles = getFloor(money / price);
    return bottles
}

function getFloor(num) {
    return num % 1000;
}
// console.log(getMilk(2));
console.log(getFloor(1.6))

