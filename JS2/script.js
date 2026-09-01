/* Task 1 

Create three variables:

var - student name
let -  student age
const -  college name

Requirements
1. Print all three values.
2. Change the `var` value.
3. Change the `let` value.
4. Try changing the `const` value and observe the error.
5. Try redeclaring the `var` variable.
6. Try redeclaring the `let` variable and observe the error.

var studentName = "kishor";
let studentAge = 22;
const collegeName = "ABC College";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

  Changing values
studentName = "kumar";
studentAge = 23;

console.log(studentName);
console.log(studentAge);


Task 2 
Get the following information from the user using  prompt()

Name
Age
City
Print the result in the console.

var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

Task 3 
Welcome Message

Get the user's name using prompt()

var name = prompt("Enter your name:");

alert("Welcome " + name + "!");

Task 4 — Age Calculator

Ask the user for their birth year.

Calculate their approximate age using:

var birthYear = prompt("Enter your birth year:");

var age = 2026 - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);

Task 5 

Create variables containing

"Hello"
100
25.5
true
false
undefined
null

var a = "Hello";
var b = 100;
var c = 25.5;
var d = true;
var e = false;
var f;
var g = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);



Task 6 

Create an object:

name
age
city
qualification
isStudent

var student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "BE CSE",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

Task 7 
Fruit Array

Create an array containing 6 fruits.

Apple
Mango
Orange
Banana
Grapes
Papaya

var fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);


Task 8 
 Basic Calculator
Create two numbers:
Perform:

- Addition
- Subtraction
- Multiplication
- Division
- Modulus
- Exponentiation

Print every result separately.

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

Task 9 
 Shopping Bill**

Create:
Shirt = 999
Pant = 1499
Shoes = 1999
Calculate the total price

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total:", total);

Task 10 
Simple Marks Calculation

Create marks for 3 subjects:
Tamil = 80
English = 75
Maths = 90

let tamil = 80;
let english = 75;
let maths = 90;

let total = tamil + english + maths;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average);

Task 11 
 Post Increment
Predict the output before running the code
let a = 10;
let b = a++;

console.log(a);
console.log(b);

Write your expected output first, then run it

11
10

Task 12 
 Pre Increment
Predict the output:
let a = 10;

let b = ++a;

console.log(a);
console.log(b);

11
11



Task 13 
Post Decrement

Predict:
let a = 20;
let b = a--;

console.log(a);
console.log(b);

19
20

Task 14  
Pre Decrement

Predict:
let a = 20;
let b = --a;

console.log(a);
console.log(b);

19
19

Task 15 
 Find the Final Values

Without running the code, find the output:
let a = 5;
let b = a++;
let c = ++a;
let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
Students should write the answer first and then verify it.

7
4
7
5

Task 16 
 Assignment Operators
let num = 10;
Perform each operation separately:

+=
-=
*=
/=
%=
**=

Example:
num += 5;
console.log(num);

15
5
50
2
1
100


Task 17 
 Mini Student Profile
Create a student profile using:

Variables
Name
Age
City
College

Array
Store 5 favorite subjects.

Object
Create an employee/student object containing:
name
age
city
subjects
isStudent

print
1. Student name
2. Student age
3. City
4. First subject
5. Last subject
6. Total subjects
7. Complete object

var name = "Naveen";
var age = 22;
var city = "Trichy";
var college = "ABC College";

var subjects = ["Java","JavaScript","HTML","CSS","SQL"];

var student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.city);
console.log("First Subject:", subjects[0]);
console.log("Last Subject:", subjects[subjects.length - 1]);
console.log("Total Subjects:", subjects.length);
console.log("Complete Object:", student);


Final Challenge 
Calculator

Get two numbers from the user using prompt()
Perform:

Addition
Subtraction
Multiplication
Division
Modulus
Power

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);


*/
