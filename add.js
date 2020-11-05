// {
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log("C: " + c);

//     let d = new Date();
//     let today = "Today is :" + (d.getMonth() + 1) + " " + d.getDate() + " " + d.getFullYear();
//     console.log(today);
// }
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
const FULL_TIME_HRS = 8;
const PART_TIME_HRS = 4;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
{

    function getWorkingHrs(empCheck) {
        switch (empCheck) {
            case IS_FULL_TIME:
                return FULL_TIME_HRS;
            case IS_PART_TIME:
                return PART_TIME_HRS;
            default:
                return 0;
        }
    }

    let totalEmpHrs = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHrs(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HR;
    console.log("Total Emp Hrs: " + totalEmpHrs + " EMPWAGE IS :" + empWage);
}


//UC5
{
    const MAX_HRS_IN_MONTH = 100;
    const NUM_OF_WORKING_DAYS = 10;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHrs(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HR;
    console.log("UC5- Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs +
        " Emp Wage: " + empWage);
}



var arguments = process.argv 
  
function add(a, b) { 
      return parseInt(a)+parseInt(b)  
} 
  
var sum = add(arguments[2], arguments[3]) 
  
console.log("Addition is ", sum) 

