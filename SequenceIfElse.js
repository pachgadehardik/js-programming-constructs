//uc1
let min = 1000;
let max = 99;
for(var i=0;i< 5;i++){
  var digit = getThreeDigitNumber();
  console.log(digit);
  if( min > digit ){
    min = digit;
  }

  if(max < digit){
    max = digit;
  }
}
console.log("min of 5 numbers:" + min);
console.log("max of 5 numbers:" + max);

function getThreeDigitNumber(){
  return Math.floor(Math.random()*(999-100+1)+100);
}

// //UC2
const startdate = new Date('03/01/2020');
const enddate = new Date('06/01/2020');

function checkDate(date){
  var startD = new Date(date);
  if(startD >= startdate && startD <= enddate) {
    return true;
  } else {
    return false;
  }
}
var myArgs = process.argv
console.log(checkDate(myArgs));

//uc3
let year = 2400;
if(year%4 ==0 && year%100 != 0){
  console.log("Leap year");
} else if (year % 400 == 0){
  console.log("Leap year");
}else console.log("Not a leap year");

//uc4
const HEAD = 1;
const TAIL = 0;
let toss = Math.floor(Math.random()*10) % 2;
console.log("Toss value : " + toss);
if(toss == HEAD)
  console.log("HEAD");
else
  console.log("TAIL");