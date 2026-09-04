/*
 Task 1
Create variables using `var`, `let`, and `const` for:

Name
Age
City
College

Print all values. Change var and let. Try changing and redeclaring const.

var name = "Naveen";
let age = 22;
const city = "Trichy";
const college = "ABC College";

console.log(name);
console.log(age);
console.log(city);
console.log(college);

Changing var
name = "Kumar";
console.log(name);

Changing let
age = 23;
console.log(age);

Redeclaring var
var name = "Arun";
console.log(name);

Task 2

console.log()
alert()
confirm()
prompt()
document.writeln()

console.log("Hello JavaScript");

alert("Welcome to JavaScript");

confirm("Are you sure?");

let name = prompt("Enter your name");
console.log(name);

document.writeln("Hello World");

Task 3
Get the following details from the user:

Name
Age
City
Qualification

Print them in the console.

let name = prompt("Enter your name");
let age = prompt("Enter your age");
let city = prompt("Enter your city");
let qualification = prompt("Enter your qualification");

console.log(name);
console.log(age);
console.log(city);
console.log(qualification);

Task 4

Create variables containing

100
99.5
true
false
undefined
null

Print their values and data types.

let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);

JavaScript string
100 number
99.5 number
true boolean
false boolean
undefined undefined

Task 5 

Create an array of student names.

Print

1. First student
2. Second student
3. Last student
4. Total students


let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log(students[0]);
console.log(students[1]);
console.log(students[4]);
console.log(students.length);

Arun
Priya
Rahul
5

Task 6 

Create an employee object containing:

name
age
role
skills
isWorking
qualification

Print

Employee name
Age
Role
First skill
Last qualification
Working status

let employee = {
    name: "Naveen",
    age: 25,
    role: "Java Developer",
    skills: ["Java", "Spring", "JavaScript"],
    isWorking: true,
    qualification: ["BE", "Java Certification"]
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.qualification[1]);
console.log(employee.isWorking);

Task 7

let a = 20;
let b = 5;

Addition
Subtraction
Multiplication
Division
Modulus
Exponentiation


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

25
15
100
4
0
3200000

Task 8 

Shirt = 999
Pant = 1499
Shoes = 1999
Bag = 799

Calculate the total price.


let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;

console.log(total);

5296

Task 9

A

let a = 10;

let b = a++;

console.log(a);
console.log(b);

11
10

B

let a = 10;

let b = ++a;

console.log(a);
console.log(b);

11
11

C


let a = 10;

let b = a--;

console.log(a);
console.log(b);

9
10

 D

let a = 10;

let b = --a;

console.log(a);
console.log(b);

9
9

Task 10 


let num = 10;

Perform
+= 5
-= 3
*= 2
/= 4
%= 3
**= 2

let num = 10;

num += 5;
console.log(num);    15

num -= 3;
console.log(num);    12

num *= 2;
console.log(num);    24

num /= 4;
console.log(num);    6

num %= 3;
console.log(num);    0

num **= 2;
console.log(num);    0

Task 11

Find the output:

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");

true
false
true
false
true
false
false
true

Task 12 


console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

true
false
false
false

Task 13 

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

true
true
true
false

Task 14 — NOT Operator


console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));

false
true
true
false

Task 15 


Find the output without executing.
 A

console.log(5 == "5" && !(5 === 5) || 6 > 7);

false

5 == "5"      true
5 === 5       true
!(true)       false
true && false  false
6 > 7         false
false || false  false

B

console.log(10 > 5 && 8 < 12 || 4 === "4");


true

10 > 5        true
8 < 12        true
true && true  true
4 === "4"    false
true || false  true

C


console.log(7 === 7 && 10 != "10" || 5 >= 5);

true

7 === 7        true
10 != "10"     false
true && false  false
5 >= 5         true
false || true  true

D


console.log(15 < 10 || 20 > 15 && 5 == "5");

true

15 < 10        false
20 > 15        true
5 == "5"       true
true && true   true
false || true  true

Task 16 

let age = 20;

age >= 18  Eligible to vote
age < 18   Not eligible

let age = 20;

let result = age >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result);

Eligible to vote

Task 17 

let password = true;

true  Login successful
false  Wrong password

let password = true;

let result = password ? "Login successful" : "Wrong password";

console.log(result);

Login successful

Task 18

let name = "Naveen";
let age = 25;
let city = "Trichy";

My name is Naveen. I am 25 years old. I live in Trichy.



let name = "Naveen";
let age = 25;
let city = "Trichy";

console.log("My name is " + name + ". I am " + age + " years old. I live in " + city + ".");

Task 19 

100
true
undefined
null
[1, 2]


Print the result and its typeof

console.log(String(100), typeof String(100));

console.log(String(true), typeof String(true));

console.log(String(undefined), typeof String(undefined));

console.log(String(null), typeof String(null));

console.log(String([1, 2]), typeof String([1, 2]));

100 string
true string
undefined string
null string
1,2 string


Task 20 

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

0
0
123
NaN
1
0
NaN
0

Task 21 

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

false
false
true
true
true
false
false
false
true
true

Task 22 

Get age using prompt()

let age = Number(prompt("Enter your age"));

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

Task 23 

Get a number from the user

Check whether it is:

Positive
Negative
Zero


let num = Number(prompt("Enter a number"));

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

Task 24 

Get marks from the user

90–100   A Grade
80–89    B Grade
70–79    C Grade
60–69   D Grade
Below 60   Fail

let marks = Number(prompt("Enter your marks"));

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}

Task 25 


Age
Height
Weight

Age >= 18
Height >= 160
Weight >= 60

If all are satisfied
Congratulations! You are selected

Otherwise display the reason

let age = Number(prompt("Enter your age"));
let height = Number(prompt("Enter your height"));
let weight = Number(prompt("Enter your weight"));

if (age >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Your weight is below 60");
        }

    } else {
        console.log("Your height is below 160");
    }

} else {
    console.log("Your age is below 18");
}

Task 26 

Get a traffic light color
red
yellow
green

let color = prompt("Enter traffic light color");

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}
        
Task 27 

let day = 1

1  Monday
2  Tuesday
3  Wednesday
4  Thursday
5  Friday
6  Saturday
7  Sunday


let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

Monday

Task 28  --Student Result System

Create a Student Result System.


Name
Age
City
Tamil marks
English marks
Maths marks

Calculate:
Total
Average

Grade
90+   A
80+   B
70+   C
60+   D
Below 60   Fail


Get user details

let name = prompt("Enter your name");
let age = Number(prompt("Enter your age"));
let city = prompt("Enter your city");

 Get marks

let tamil = Number(prompt("Enter Tamil marks"));
let english = Number(prompt("Enter English marks"));
let maths = Number(prompt("Enter Maths marks"));

Calculate total

let total = tamil + english + maths;

let average = total / 3;

 Check grade

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

 Display result

console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
`);


Name: Naveen
Age: 22
City: Trichy
Total: 250
Average: 83.33
Grade: B



*/