//uc1
let n = 5;
let power = 1;
for (var i = 1; i <= n; i++) {
    power *= 2;
    console.log("2 to the power " + i + " : " + power);
}


//uc2
let n = 5;
let harmonicSum = 0;
for (var i = 1; i <= n; i++) {
    harmonicSum += 1 / i;
}
console.log("Harmonic sum :" + harmonicSum);






//uc3
let n = 67;
console.log("Number is : " + (checkPrime(n) ? "NOT PRIME" : "PRIME"));
function checkPrime(n) {
    let sqrt = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= sqrt; i++) {
        if (n % i == 0) {
            return true;
            break;
        }
    }
    return false;
}

//uc4
let n = 67;
for (var i = 2; i <= n; i++) {
    if (!checkPrime(i))
        console.log(i);
}


//UC5
function getFactorial(number) {
    if (number == 0) return 1;

    return number * getFactorial(number - 1);
}
let n = 5;
console.log(getFactorial(n));


//UC 6
function getPrimeFactors(num) {
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            console.log("Prime Factor: " + i);
            num = num / i;
        }
    }
}
getPrimeFactors(14);


