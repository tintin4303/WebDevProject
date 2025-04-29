// backtick above TAB for fstring equivalent
function lifeInWeeks(age) {
        var remaining_age = 90 - age;
        var days = remaining_age * 365;
        var weeks = remaining_age * 52;
        var months = remaining_age * 12;
        console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)
}

// bmi calculator with rounding
function bmiCalculator (weight, height) {
    let bmi = Math.round(weight / Math.pow(height,2));
    if (bmi < 18.5) {
        return `Your BMI is ${bmi}, so you are underweight.`
    } else if (bmi < 24.9) {
        return `Your BMI is ${bmi}, so you have a normal weight.`
    } else {
        return `Your BMI is ${bmi}, so you are overweight.`
    }
}

// leap year
function leapYearCheck(year) {
    if (year % 4 === 0) {
        if (year % 100) {
            if (year % 400) {
                return true;
            } else {
                return false;
            } 
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// fibonacci forLoop
function fibonacciGenerator(n){
    let arr = [];
    if (n===1) {
        arr.push(0);
    }
    if (n===2){
        arr.push(0,1);
    }
    if (n > 2) {
        arr.push(0,1);
        for (let i = 2; i < n; i++) {
            arr.push(arr[i-2]+arr[i-1]);
        }
    }
    return arr;
}

function fibonacciGenerator_recur(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    let arr = fibonacciGenerator_recur(n - 1);
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return arr;
}


function main(){
    console.log(fibonacciGenerator(2));
}

main();