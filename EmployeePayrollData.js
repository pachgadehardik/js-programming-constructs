class EmployeePayrollData {
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.pinCode = params[5];
        this.email = params[6];
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
    get pinCode() { return this._pinCode }
    set pinCode(pinCode) {
        let pinCodeRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$')
        if (pinCodeRegex.test(pinCode))
            this._pinCode = pinCode
        else throw 'Pincode is Incorrect';
    }
    get email() { return this._email }
    set email(email) {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([\\. | \\- | \\_]{1}[A-Za-z0-9]+)*(@){1}[a-zA-Z0-9]+\\.[a-zA-Z]{2,}(\\.[A-Za-z]{2,})?$')
        if (pinCodeRegex.test(pinCode))
            this._email = email
        else throw 'Email is Incorrect';
    }



    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-Us", options);
        return "Id: " + this.id + ", name: " + this.name + ", salary: " + this.salary +
            " Gender: " + this.gender + " startDate: " + empDate +" Pincode: "+ this.pinCode+" Email: "+ this.email;
    }
}


// Usecase 14
// try {
//     let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000,"M");
//     console.log(employeePayrollData.toString())
// } catch (error) {
//     console.error(error)
// }
// try {
//     employeePayrollData.name = "John"
//     console.log(employeePayrollData.toString())
// } catch (error) {
//     console.error(error)
// // }
// try {
//     let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 30000, "F", new Date());
//     console.log(newEmployeePayrollData.toString())
// } catch (error) {
//     console.error(error)
// }
// try {
//     let employeePayrollData = new EmployeePayrollData(3,"Hardik",50000,"M",new Date(), "123 123","hardik@gmail.com");
//     console.log(employeePayrollData.toString())

// } catch (error) {
//     console.error(error)
// }

let pinCodeRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
let pincheck = pinCodeRegex.test("123211")
console.log(pincheck)
