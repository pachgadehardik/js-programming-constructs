class EmployeePayrollData {
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //getter and setter
    get name() { return this._name }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get id() { return this._id }
    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*')
        if (idRegex.test(id))
            this._id = id;
        else throw 'Id is incorrect!!';
    }
    get salary() { return this._salary }
    set salary(salary) {
        let salaryRegex = RegExp('[1-9][0-9]*')
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Salary is InCorrect!!';
    }
    get gender() { return this._gender }
    set gender(gender) {
        let genderRegex = RegExp('^M|^F')
        if (genderRegex.test(gender))
            this._gender = gender
        else throw 'Gender is Incorrect';
    }
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-Us", options);
        return "Id: " + this.id + ", name: " + this.name + ", salary: " + this.salary +
            " Gender: " + this.gender + " startDate: " + empDate;
    }
}


// Usecase 14

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000,"M");
console.log(employeePayrollData.toString())
try {
    employeePayrollData.name = "john"
    console.log(employeePayrollData.toString())
} catch (error) {
    console.error(error)
}
try {
    let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 0, "F", new Date());
    console.log(newEmployeePayrollData.toString())
} catch (error) {
    console.error(error)
}
