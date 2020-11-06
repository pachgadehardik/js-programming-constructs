//UC1
function generateNumber() {
    return 100 + Math.floor(Math.random() * 900);
}
function get2ndLargest(array) {
    let first = second = array[0];
    for (var i = 0; i < 10; i++) {
        if (array[i] > first) {
            second = first;
            first = array[i];
        } else if (array[i] > second && array[i] != first) {
            second = array[i];
        }
    }
    return second;
}
function get2ndSmallest(array) {
    let first = second = array[0];
    for (var i = 0; i < 10; i++) {
        if (array[i] < first) {
            second = first;
            first = array[i];
        } else if (array[i] < second && array[i] != first) {
            second = array[i];
        }
    }
    return second;
}
let array = new Array();
for (var i = 0; i < 10; i++) {
    array.push(generateNumber());
}
console.log(array);
console.log("2nd largest element is: " + get2ndLargest(array));
console.log("2nd Smallest element is: " + get2ndSmallest(array));

console.log("---------------------------------------------")
//UC2- sorting the array 
console.log("Sorted Array is: " + array.sort(function (a, b) { return a - b }))
console.log("---------------------------------------------")

//UC3 -Prime Factorization 
{
    function getPrimeFactors(num) {
        for (var i = 2; i <= num; i++) {
            while (num % i == 0) {
                console.log("Prime Factor: " + i);
                primeFactorArray.push(i);
                num = num / i;
            }
        }
        return primeFactorArray;
    }
    let primeFactorArray = new Array();
    let num = 12121;
    console.log("Prime factors of " + num + " are : " + getPrimeFactors(num));
}
console.log("---------------------------------------------")

//Uc 4





//UC5 
{
    let similarDigitsArray = new Array();
    for(var i = 10 ; i<=100 ;i++){
        if(i%11 == 0){
            similarDigitsArray.push(i/11);
        }
        else if(i%100 == 0){
            similarDigitsArray.push(0)
        }
    }
    console.log("Digits which are Repeated in a Number are :"+similarDigitsArray)
}

