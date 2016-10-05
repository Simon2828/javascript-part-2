function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}


function Email(address, type) {
    this.address = address;
    var usableType = 'other';
    var types = ['work', 'home'];
    if(types.indexOf(type) > -1) {
        usableType = type
    }
    this.type = usableType;
    // this.type = function(type) {
    //     if (type === "work") {
    //         return "work";
    //     }
    //     if (type === "home") {
    //         return type;
    //     }
    //     if (type === "other") {
    //         return type;
    //     } else {
    //         return "other";
    //     }
    //};
}

Person.prototype = {
    addEmail: function(emailAddress, type) {
        return this.emails.push(new Email(emailAddress,type));
    }
};

var simon = new Person("Simon", "Tanner");
console.log(simon.addEmail("simon@gmail.com", "work"));
console.log(simon);