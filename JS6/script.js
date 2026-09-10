/*

Task 1  Student Result Analyzer
Create a program that accepts a student's:
Name
Department
5 subject marks
Requirements:
Calculate total marks
Calculate average
Find pass/fail
Assign grade:
90+ → A
75–89 → B
60–74 → C
50–59 → D
Below 50 → Fail
Display the result using console.log()
Concepts: variables, arithmetic operators, if/else, functions


function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;

    let result;
    let grade;

    if (average >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult("Arun", "CSE", 90, 85, 80, 95, 88);


Task 2  Employee Salary Calculator
Create an employee object:
{
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
}
Calculate:
Basic salary
10% bonus if experience ≥ 2
15% bonus if experience ≥ 5
Final salary
Use a function:
calculateSalary(employee)
Concepts: objects, functions, conditions, arithmetic


let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);



Task 3  Product Filter System
Create an array:
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
Perform:
Get products above ₹2,000
Get only electronics
Find the first product below ₹1,000
Calculate total price of all products
Check whether any product costs more than ₹50,000
Check whether every product has a price above ₹500
Concepts: filter(), find(), reduce(), some(), every()


let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// 1. Products above ₹2,000
let above2000 = products.filter(product => product.price > 2000);

console.log("Products above ₹2000:");
console.log(above2000);


// 2. Only electronics
let electronics = products.filter(product => product.category === "electronics");

console.log("Electronics:");
console.log(electronics);


// 3. First product below ₹1,000
let below1000 = products.find(product => product.price < 1000);

console.log("First product below ₹1000:");
console.log(below1000);


// 4. Total price
let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);


// 5. Any product above ₹50,000
let expensiveProduct = products.some(product => product.price > 50000);

console.log("Any product above ₹50000:", expensiveProduct);


// 6. Every product above ₹500
let allAbove500 = products.every(product => product.price > 500);

console.log("Every product above ₹500:", allAbove500);



Task 4  Employee Management
Create an array of 6 employees.
Each employee should have:
{
    id: 101,
    name: "Kavin",
    role: "Frontend Developer",
    salary: 40000
}
Perform:
Display all employee names
Display employees earning above ₹40,000
Find employee with ID 103
Calculate total salary
Find highest-paid employee
Sort employees from highest salary to lowest
Create a new array containing only employee names
Concepts: objects, arrays, map(), filter(), find(), reduce(), sort()


let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Priya",
        role: "HR",
        salary: 35000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Java Developer",
        salary: 55000
    },
    {
        id: 105,
        name: "Karthi",
        role: "Full Stack Developer",
        salary: 60000
    },
    {
        id: 106,
        name: "Divya",
        role: "UI Developer",
        salary: 42000
    }
];


let names = employees.map(employee => employee.name);

console.log("Employee Names:");
console.log(names);



let highSalaryEmployees = employees.filter(employee => employee.salary > 40000);

console.log("Employees above ₹40000:");
console.log(highSalaryEmployees);


let employee103 = employees.find(employee => employee.id === 103);

console.log("Employee with ID 103:");
console.log(employee103);


let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);


let highestPaid = employees.reduce((highest, employee) => {
    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }
});

console.log("Highest Paid Employee:");
console.log(highestPaid);



let sortedEmployees = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log("Salary High to Low:");
console.log(sortedEmployees);


let employeeNames = employees.map(employee => employee.name);

console.log("Names Only:");
console.log(employeeNames);



Task 5  Shopping Cart
Create:
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
Calculate:
Item total:
price × quantity
Then calculate:
Total cart value
10% discount if total > ₹50,000
Final payable amount
Create a function:
calculateCart(cart)
Concepts: objects, functions, reduce(), conditions


let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let itemTotals = cart.map(item => {
        return item.price * item.quantity;
    });

    console.log("Item Totals:", itemTotals);

    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    let discount = 0;

    if (total > 50000) {
        discount = total * 10 / 100;
    }

    let finalAmount = total - discount;


    console.log("Total Cart Value:", total);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);




Task 6 — Student Search System
Create an array of students:
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];
Requirements:
Display all student names
Display students who scored above 80
Find student named "Priya"
Calculate average mark
Check whether anyone failed
Check whether everyone scored above 40
Sort students by marks


let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


let studentNames = students.map(student => student.name);

console.log("Student Names:");
console.log(studentNames);



let above80 = students.filter(student => student.mark > 80);

console.log("Students above 80:");
console.log(above80);


let priya = students.find(student => student.name === "Priya");

console.log("Priya:");
console.log(priya);


let totalMarks = students.reduce((total, student) => {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);


let anyoneFailed = students.some(student => student.mark < 50);

console.log("Anyone Failed:", anyoneFailed);


let everyoneAbove40 = students.every(student => student.mark > 40);

console.log("Everyone above 40:", everyoneAbove40);


let sortedStudents = [...students].sort((a, b) => {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:");
console.log(sortedStudents);



Task 7  Array Transformation Challenge
Given:
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
Perform:
Create a new array containing numbers × 2
Get only even numbers
Get numbers greater than 15
Find the first number greater than 20
Find total of all numbers
Check whether any number is greater than 40
Check whether every number is positive
Sort from highest to lowest
Restriction: Use array higher-order methods wherever possible



let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


let doubled = numbers.map(number => number * 2);

console.log("Doubled:", doubled);


let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even Numbers:", evenNumbers);


let greaterThan15 = numbers.filter(number => number > 15);

console.log("Greater than 15:", greaterThan15);


let firstGreater20 = numbers.find(number => number > 20);

console.log("First number greater than 20:", firstGreater20);



let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Total:", total);


let anyGreater40 = numbers.some(number => number > 40);

console.log("Any number greater than 40:", anyGreater40);



let everyPositive = numbers.every(number => number > 0);

console.log("Every number positive:", everyPositive);



let descending = [...numbers].sort((a, b) => b - a);

console.log("Highest to Lowest:", descending);



Task 8  String Analyzer
Ask the user to enter a sentence.
Example:
"JavaScript is very powerful"
Display:
Total characters
Uppercase sentence
Lowercase sentence
Whether it contains "JavaScript"
First character
Last character
Number of words
Replace "JavaScript" with "Python"
Convert sentence into an array using split()
Concepts: length, includes(), slice(), toUpperCase(), toLowerCase(), replace(), split()



let sentence = prompt("Enter a sentence:");

console.log("Original Sentence:", sentence);


console.log("Total Characters:", sentence.length);


console.log("Uppercase:", sentence.toUpperCase());


console.log("Lowercase:", sentence.toLowerCase());



console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);



console.log("First Character:", sentence.slice(0, 1));


console.log("Last Character:", sentence.slice(-1));



let words = sentence.split(" ");

console.log("Number of Words:", words.length);



let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("Replaced Sentence:", replacedSentence);


console.log("Sentence Array:", sentence.split(" "));



🔥 Final Mini Project — Employee Dashboard
This would be a good intermediate-level class project.
Create an Employee Dashboard using JavaScript.
Data
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];
Students must implement
1. Employee List
Display all employees

console.log("All Employees:");

employees.forEach(employee => {
    console.log(employee);
});

2. Search
Search employee by name.


let searchName = "Arun";

let searchedEmployee = employees.find(employee => {
    return employee.name === searchName;
});

console.log("Search Result:");
console.log(searchedEmployee);


3. Department Filter
Filter employees by department


let department = "IT";

let departmentEmployees = employees.filter(employee => {
    return employee.department === department;
});

console.log("IT Employees:");
console.log(departmentEmployees);


4. Salary Filter
Show employees earning more than ₹50,000


let highSalary = employees.filter(employee => {
    return employee.salary > 50000;
});

console.log("Employees earning above ₹50000:");
console.log(highSalary);


5. Salary Calculation
Calculate total company salary


let totalCompanySalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", totalCompanySalary);



6. Highest Salary
Find the highest-paid employee.


let highestSalaryEmployee = employees.reduce((highest, employee) => {

    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});

console.log("Highest Paid Employee:");
console.log(highestSalaryEmployee);


7. Experience
Find employees with more than 3 years' experience


let experiencedEmployees = employees.filter(employee => {
    return employee.experience > 3;
});

console.log("Employees with more than 3 years experience:");
console.log(experiencedEmployees);



8. Sorting
Sort employees by salary:
Low  High
High  Low



let lowToHigh = [...employees].sort((a, b) => {
    return a.salary - b.salary;
});

console.log("Salary Low to High:");
console.log(lowToHigh);


9. Statistics
Display:
Total Employees: 3
Total Salary: ₹160000
Highest Salary: ₹65000
Average Salary: ₹53333



let totalEmployees = employees.length;

let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

let highestSalary = Math.max(
    ...employees.map(employee => employee.salary)
);

let averageSalary = totalSalary / totalEmployees;

console.log("===== EMPLOYEE DASHBOARD =====");

console.log("Total Employees:", totalEmployees);

console.log("Total Salary: ₹" + totalSalary);

console.log("Highest Salary: ₹" + highestSalary);

console.log("Average Salary: ₹" + averageSalary.toFixed(0));




*/