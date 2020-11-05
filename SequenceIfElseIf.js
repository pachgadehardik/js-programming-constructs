// UC1

let digit = 8;
if(digit == 0){
    console.log("Digit is ZERO");
}
else if(digit == 1){
    console.log("Digit is ONE");
}
else if(digit == 2){
    console.log("Digit is TWO");
}
else if(digit == 3){
    console.log("Digit is THREE");
}
else if(digit == 4){
    console.log("Digit is FOUR");
}
else if(digit == 5){
    console.log("Digit is FIVE");
}
else if(digit == 6){
    console.log("Digit is SIX");
}
else if(digit == 7){
    console.log("Digit is SEVEN");
}
else if(digit == 8){
    console.log("Digit is EIGHT");
}
else if(digit == 9){
    console.log("Digit is NINE");
}
else{
    console.log("Number is Invalid");
}

//UC2
let dayOfTheWeek = 1;
if(dayOfTheWeek == 1)
  console.log("Sunday");
else if(dayOfTheWeek == 2)
  console.log("Monday");
else if(dayOfTheWeek == 3)
  console.log("Tuesday");
else if(dayOfTheWeek == 4)
  console.log("Wednesday");
else if(dayOfTheWeek == 5)
  console.log("Thursday");
else if(dayOfTheWeek == 6)
  console.log("Friday");
else (dayOfTheWeek == 7)
  console.log("Saturday");

// UC3
console.log("Considering 4 Digit number");

function getDigitsPlace(number){
    let counter =0;
    while (number > 0) {
        counter++;
        console.log("Digit Number: "+(number%10));
        number = number/10;
    }
}
let number = 4082
getDigitsPlace(number);

//UC4
const a = 10;
const b = 25;
const c = 5;

let exp1 = a+b*c;
let exp2 = a%b+c;
let exp3 = c+a/b;
let exp4 = a*b+c;
let maxVal = Math.max(exp1,exp2,exp3,exp4);
let minVal = Math.min(exp1,exp2,exp3,exp4);

if(exp1==maxVal){
    console.log("Max Value is :"+exp1);
}else if(exp2==maxVal){
    console.log("Max Value is :"+exp2);
}else if(exp3 == maxVal){
    console.log("Max Value is :"+exp3);
}else if(exp4 == maxVal){
    console.log("Max Value is :"+exp4);
}

if (exp1 == minVal) {
    console.log("Min Value is :" + exp1);
} else if (exp2 == minVal) {
    console.log("Min Value is :" + exp2);
} else if (exp3 == minVal) {
    console.log("Min Value is :" + exp3);
} else if (exp4 == minVal) {
    console.log("Min Value is :" + exp4);
}

