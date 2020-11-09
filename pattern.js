// let pinCodeRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
// let pincheck = pinCodeRegex.test("A123211")
// console.log(pincheck)

let emailRegex = RegExp('^[a-zA-Z0-9]+([\\. | \\- | \\_]{1}[A-Za-z0-9]+)*(@){1}[a-zA-Z0-9]+\\.[a-zA-Z]{2,}(\\.[A-Za-z]{2,})?$')
let emailCheck = emailRegex.test("abc@xyz.com");
let emailCheck1 = emailRegex.test("abc@co");
console.log(emailCheck)
console.log(emailCheck1)