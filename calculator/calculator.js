const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const multiply = (arr) => {
    let multiply = 1;
    for (let i = 0; i < arr.length; i++) {
        multiply *= arr[i];
    }
    return multiply;
}

const power = (base, power) => {
    return Math.pow(base, power);
}

const factorial = (num) => {
    if (num == 0) return 1;

    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    return num;
}

add(2, 2);
subtract(5, 2);
sum([7]);
multiply([3, 4]);
power(3, 2);
factorial(10);

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}