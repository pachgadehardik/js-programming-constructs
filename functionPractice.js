//UC 1 2 3 
function checkPalindrome(number){
    let reverseNum = 0;
    let remainder;
    let temp = number;
    while(temp!=0){
        remainder = temp%10;
        reverseNum = reverseNum*10+remainder;
        temp = Math.floor(temp/10);
    }
    if(number == reverseNum){
        console.log("Number is Palindrome!!");
        return true;
    } 
    console.log("Number is not palindrome");
    return false;
}

function checkPrime(n){
    let sqrt = Math.floor(Math.sqrt(n));
    for(var i=2 ;i <= sqrt ;i++){
      if(n%i == 0){
        return false;
        break;
      }
    }
    return true;
}

function convert(value,type){
    switch(type){
      case "DEGREE":
            if(value < FERENHEIT.freezing || value > FERENHEIT.boiling){
              console.log("WRONG value!!!");
              break;
            }
            console.log("FERENHEIT To DEGREE : " + (value - 32) * 5/9);
            break;
      case "FERENHEIT":
            if(value < DEGREE.freezing || value > DEGREE.boiling){
              console.log("WRONG value!!!");
              break;
            }
            console.log("DEGREE TO FERENHEIT : " + (value*9/5) + 32);
            break;
    }
  }
  
  //uc1
  const DEGREE = {freezing : 0, boiling : 100};
  const FERENHEIT = {freezing : 32, boiling : 212};
  
  convert(-12,"DEGREE");


let number = 11;
checkPalindrome(number);

console.log(checkPalindrome(number) && checkPrime(number) ? "Number is PrimePalindrome": "Not a PrimePalindrome!!");