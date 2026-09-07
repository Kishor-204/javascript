/*

Task 1 
Print numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


Task 2 
Print numbers from 10 to 1 using a for loop

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


Task 3 — Even Numbers
Print all even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

Task 4 — Odd Numbers
Print all odd numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

Task 5 — Multiplication Table
Get a number from the user
Print its multiplication table from 1 to 10

let number = Number(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


Task 6 
Countdown
Using while, print

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

Task 7 
Sum of Numbers
Using while, calculate

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log(sum);

Task 8 
Print Numbers
Use do...while to print

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);



Task 9 
What is the output?
let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

console.log(a);

10

Task 10 
String Characters
let name = "javascript";
Print every character using for...of

let name = "javascript";

for (let character of name) {
    console.log(character);
}


Task 11 
Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
Use for...of to print every fruit

let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}

Task 12 
Student Names
Create an array of 5 student names
Use for...of to print

let students = ["Arun", "Priya", "Kumar", "Naveen", "Divya"];

for (let student of students) {
    console.log("Student: " + student);
}


Task 13 
Employee Object
Create:
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
Use for...in to print


let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}




Task 14 
Product Object
Create:
productName
price
brand
category
stock
Use for...in to print every key and value

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}

Task 15
Create a function called welcome()
It should print
Welcome to JavaScript
Call the function 3 times

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


Task 16 
Function With Parameter
Create

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");

Expected:
Hello Naveen
Hello Arun
Hello Priya


Task 17
Create a function:
student(name, age, department)
Print all three values.
Call it with 3 different students.

function student(name, age, department) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
}

student("Arun", 21, "CSE");
student("Priya", 22, "ECE");
student("Naveen", 21, "IT");


Task 18
Addition Function
Create:
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

Expected:
30

Task 19 
Salary
Create:
function salary(amount) {
    return amount;
}
Store the returned value in a variable and print it

function salary(amount) {
    return amount;
}

let result = salary(50000);

console.log(result);

Task 20 
Bonus Calculator
Create:
function bonus(salary, bonusAmount)
Return:
salary + bonusAmount
Example:
Salary = 50000
Bonus = 5000
Total = 55000


function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);

console.log(total);


Task 21
Create:
function employee(name, role = "Developer") {
    // print name and role
}
Call:
employee("Arun");
employee("Priya", "Designer");
Find the output.

function employee(name, role = "Developer") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}

employee("Arun");
employee("Priya", "Designer");

Task 22 
Create a named function
function square(number) {
    return number * number;
}
Call it with 5 different numbers

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


Task 23
Create an anonymous function and store it in a variable
Call it and print the result

let calculate = function(a, b) {
    return a + b;
};

let result = calculate(10, 20);

console.log(result);

Task 24 
Create an arrow function that accepts two numbers and returns their multiplication.

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));

Task 25
function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    console.log(c);
}

test();

Task 26 
console.log(a);

var a = 10;
What happens?

console.log(a);

var a = 10;

Task 27
Predict:
console.log(b);

let b = 20;

console.log(b);
let b = 20;
it cannot be accessed before its declaration

Task 28
Predict:
console.log(c);
const c = 30;
Then explain the difference between the three.

var	undefined
let	ReferenceError
const	ReferenceError


Task 29
Create an IIFE that immediately prints:
Welcome to JavaScript
Then create another IIFE that accepts:
product
discount
and prints the discount message

(function() {
    console.log("Welcome to JavaScript");
})();

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

Task 30
Create
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);



Task 31
Create a generator:
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
Create the generator object and print all values using for...of.
This matches the generator approach in your syllabus

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

for (let value of result) {
    console.log(value);
}

Task 32 
Employee Management Console
Create a simple Employee Management System using only the concepts you've learned.
Employee data
Create an array containing employee objects:
Name
Age
Department
Role
Salary
Example:
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];
Requirements
Use:
1. for...of
Print every employee.
2. for...in
Print each employee's keys and values.
3. Function
Create a function to display employee information.
4. Function parameters
Pass employee information to the function.
5. Return
Create a function that returns an employee's salary.
6. Condition
Check:
Salary >= 40000
7. Arrow function
Create an arrow function for another simple calculation.
8. Generator
Create a generator that produces employee benefits:
Medical Insurance
Transport
Food Allowance
Bonus



let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Naveen",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];

console.log("EMPLOYEE DETAILS");

for (let employee of employees) {

    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.department);
    console.log(employee.role);
    console.log(employee.salary);

    console.log("----------------");
}


console.log("KEYS AND VALUES");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}


function displayEmployee(name, age, department, role, salary) {

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
    console.log("Role: " + role);
    console.log("Salary: " + salary);

    console.log("----------------");
}


for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}



function getSalary(employee) {
    return employee.salary;
}

let employeeSalary = getSalary(employees[0]);

console.log("Employee Salary: " + employeeSalary);


for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    }
}


let calculateBonus = (salary) => {
    return salary + 5000;
};

console.log(calculateBonus(40000));

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

console.log("EMPLOYEE BENEFITS");

for (let benefit of employeeBenefits) {
    console.log(benefit);
}


*/