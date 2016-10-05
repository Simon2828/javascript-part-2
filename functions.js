// sort function should take two strings, and return a value that sort can use to determine which is the longest string

function sortLongestString(str1, str2) {
    return str2.length - str1.length;
}

var arr = ["hello", "hi", "bye", "me"];

console.log(arr.sort(sortLongestString));

// sort your array by the longest name

var emails = [{
    name: "Simon",
    email: 'simon@gmail.com'
}, {
    name: "Daniel",
    email: "daniel@gmail.com"
}, {
    name: "Dave",
    email: "dave@gmail.com"
}];


console.log(emails.sort(function(name1, name2) {
    return name2.name.length - name1.name.length;
}));

// sort your array by e-mail address in alphabetical order

console.log(emails.sort(function(email1, email2) {
    var emailA = email1.email.toLowerCase();
    var emailB = email2.email.toLowerCase();
    if (emailA < emailB) {
        return -1;
    };
    if (emailA > emailB) {
        return 1
    }
    return 0;
}));

// function should take a number and return its square. 
function square(num) {
    return num * num;
}

var numbersToSquare = [1, 2, 3, 4, 5];

console.log(numbersToSquare.map(square));

// function should be able to take an object and square its “num” property

// function objPropertySquare(obj) { } ** changed to anonymous function below **

var numbers = [{num: 1}, {num: 2}, {num: 3}];

console.log(numbers.map(function(obj){
    return Math.pow(obj.num, 2);
}));


// function will return a function that will take two numbers and return the result of running operation on these numbers. 

function operationMaker(operation) {
    switch (operation) {
        case "add":
            return function(num1,num2) {
                return num1 + num2;
            };
        case "subtract" : 
            return function(num1,num2) {
                return num1 - num2;
            };
        case "mult" : 
            return function(num1,num2) {
                return num1 * num2;
            };
        case "div" : 
            return function(num1,num2) {
                return num1 / num2;
            };
        default:
            console.log('Not a valid operation');
    }
}

var adder = operationMaker('add');
var sum = adder(5,10);
console.log(sum);

var mult = operationMaker('mult');
var product = mult(5,10);
console.log(mult(5,10));















