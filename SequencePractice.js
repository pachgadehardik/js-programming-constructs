// UC1
let digit = Math.floor(Math.random()*10);
console.log(digit);

//UC2
let diceCount = (Math.floor(Math.random()*6) % 6) + 1;
console.log(diceCount);

//uc3
let sumOfDice = 0;
for(var i=0;i< 2;i++){
  sumOfDice += (Math.floor(Math.random()*6) % 6) + 1;
}
console.log("Sum of two dice : " + sumOfDice);

//uc4
console.log("--------------------------------------------")
let count = 5;
let sum = 0;
for(var i=0;i< 5;i++){
  sum += Math.random().toFixed(2)*100;
}
console.log("Sum : " + sum);
console.log("Average : " + sum/count);

//uc5
const feetToInches = 12;
const feetToMetres = 0.305;
const acresToMetresSq = 4046.86
console.log("42 inches : " + 42/feetToInches);
let areaInMetreSq = 60*40*feetToMetres*feetToMetres;
console.log("area of 60 feet x 40 feet in metres : " + areaInMetreSq);
console.log("area in acres for 25 such plots : " + (areaInMetreSq * 25/acresToMetresSq));

