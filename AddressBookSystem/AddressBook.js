class AddressBook {
    constructor(...params) {
        this.id = params[0];
        this.firstName = params[1];
        this.lastName = params[2];
        this.address = params[3];
        this.city = params[4];
        this.state = params[5];
        this.pinCode = params[6];
        this.phoneNumber = params[7]
        this.email = params[8];
    }
    //getter and setter
    get id() { return this._id }
    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*')
        if (idRegex.test(id))
            this._id = id;
        else throw 'Id is incorrect!!';
    }
    get firstName() { return this._firstName }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'firstName is Incorrect!';
    }
    get lastName() { return this._lastName }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'lastName is Incorrect!';
    }

    get address() { return this._address }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else throw 'address is Incorrect!';
    }
    get city() { return this._city }
    set city(city) {
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if (addressRegex.test(city))
            this._city = city;
        else throw 'city is Incorrect!';
    }
    get state() { return this._state }
    set state(state) {
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if (addressRegex.test(state))
            this._state = state;
        else throw 'state is Incorrect!';
    }

    get phoneNumber() { return this._phoneNumber }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[1-9][0-9]{1,2}(\\s)[1-9][0-9]{9}$')
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber
        else throw 'phoneNumber is Incorrect';
    }

    get pinCode() { return this._pinCode }
    set pinCode(pinCode) {
        let pinCodeRegex = RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$')
        if (pinCodeRegex.test(pinCode))
            this._pinCode = pinCode
        else throw 'Pincode is Incorrect';
    }

    get email() { return this._email }
    set email(email) {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([\\. | \\- | \\_]{1}[A-Za-z0-9]+)*(@){1}[a-zA-Z0-9]+\\.[a-zA-Z]{2,}(\\.[A-Za-z]{2,})?$')
        if (emailRegex.test(email))
            this._email = email
        else throw 'Email is Incorrect';
    }
    toString() {
        return "Id: " + this.id + ", Firstname: " + this.firstName + ", Lastname: " + this.lastName + ", Address: "
            + this.address + ", City: " + this.city + ", State: " + this.state + " Pincode: " + this.pinCode + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
    }
}

let addressBookArray = new Array();
try {
    let contact1 = new AddressBook(1,"John","Wick","USAgtdtrh","NEwYORk", "Manhatten","432 123","91 9980809889","john@gma.com");
    let contact2 = new AddressBook(2,"Jane","Doe","Avenue","Mumbai", "Mahrashtra","456654","91 9980809889","jane@gma.com");
    let contact3 = new AddressBook(3,"Raju","Rastogi","USAgtdtrh","NEwYORk", "Manhatten","432 123","91 9980809889","john@gma.com");
    addressBookArray.push(contact1,contact2,contact3)
    addressBookArray.forEach(contact => console.log(contact.toString()))
    console.log("Address Book Size is :"+addressBookArray.length)
} catch (error) {
    console.error(error)
}
