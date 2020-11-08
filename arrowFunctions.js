
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
const FULL_TIME_HRS = 8;
const PART_TIME_HRS = 4;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;

const MAX_HRS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
function calDailyWage(empHrs){
    return empHrs * WAGE_PER_HR;
}

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

const findTotal = (totalValue, dailyValue) => {
    return totalValue +dailyValue;
}

let count =0;
let totalHrs =  Array.from(empDailyHrsMap.values()).filter(dailyHours => dailyHours >0).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage >0).reduce(findTotal,0);
console.log("UC9A - Empwage wIth Arrow: "+ "Total Hrs: "+totalHrs+" Total Wagwes: "+totalSalary )

let nonWorkingDays = new Array();
let partWorking = new Array();
let fullWoking = new Array();
let empdailyHrsAndWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(empCheck);
    totalEmpHrs +=empHrs;
    empdailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage:calDailyWage(empHrs),
            toString(){
                return "Day: " +this.dayNum +", DailyHrs:  " +this.dailyHours +", DailyWage: "+this.dailyWage+"\n"
            }
        });
    empDailyWageArr.push(calDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    empDailyWageMap.set(totalWorkingDays,calDailyWage(empHrs));
}


console.log(empDailyHrsMap)
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fullWoking.push(key);
    else if (value == 4) partWorking.push(key);
    else
        nonWorkingDays.push(key);
});

console.log("Full Working: " +fullWoking+"\n"+"partWorking: "+partWorking+"\n"+"nonWorking: "+nonWorkingDays)
console.log("UC 10 showing daily hours worked and wage earned : " +empdailyHrsAndWageArr)

//UC 11A-11D using Object Aling woith Arrow
let totalWages = empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).
                                    reduce((totalWages, dailyHrsAndWage) =>totalWages += dailyHrsAndWage.dailyWage, 0);
let totalHours = empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).
reduce((totalHrs, dailyHrsAndWage) =>totalHrs += dailyHrsAndWage.dailyHours, 0);
console.log("UC11A Total Hrs: "+ totalHours+" Total Wages: "+totalWages);

//UC 11B-11D Logging Full Days Work
console.log("---------11B Logging Full Days Work---------")
empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==8).forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));
console.log("---------11C Logging part Days Work---------")
empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==4).forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));
console.log("---------11C Logging Non Days Work---------")
empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==0).forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));


console.log("---------First Occurance of Full time Wage ---------")
console.log(empdailyHrsAndWageArr.find(dailyHrsAndWage => dailyHrsAndWage.dailyWage==160).toString());
console.log("---------Check Full Time Wage ---------")
console.log(empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 160).every(dailyHrsAndWage => dailyHrsAndWage.dailyWage==160));
console.log("---------Check Part Time Wage ---------")
console.log(empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 80).every(dailyHrsAndWage => dailyHrsAndWage.dailyWage==80));
console.log("---------Count Total Work Days---------")
console.log(empdailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours!=0).length);

