 /*

1 What is the difference between var, let, and const

var - can be re-declared and reassigned
let - can be reassigned but cannot be re-declared in the same scope
const - cannot be reassigned or re-declared

2 Can you re-declare a variable with var? What about let and const

var can be re-declared
let cannot be re-declared in the same scope
const also cannot be re-declared

3 What is the output of this code
var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;

console.log(x, y, z);

const variable cannot be reassigned

4 What is the difference between declaring and initializing a variable

Declaration means creating a variable without giving it a value
Initialization means giving a value to a variable for the first time

5 What will be the output

let a;
console.log(a);

undefined

6 What is hoisting? Give an example

Hoisting means JavaScript processes certain declarations before executing the code
let and const are also hoisted internally

7 What is the difference between null and undefined

undefined means a variable has been declared but has not been given a value
null means we intentionally assign no value

8 What will be the output

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

object
undefined
object
object

9 What is the difference between == and ===

== checks value and can perform type conversion
=== checks value and data type

10 What is the difference between ++i and i++

++i is pre-increment
it increases the value first and then uses it

i++ is post-increment
it uses the current value first and then increases it

11 What will be the output

let x = 10;
let y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

105
5
50
2

12 What are logical operators? Explain with examples

logical operators are used to combine or reverse conditions
there are three main logical operators:

&& AND

Both conditions must be true

console.log(10 > 5 && 20 > 10);

Output:true

|| OR
at least one condition must be true

console.log(10 > 20 || 20 > 10);

Output:true

! NOT

It reverses the result

console.log(!(10 > 5));

Output:false

13 What will be the output

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

true
true
false

14 What is the ternary operator Give an example

The ternary operator is a short form of if-else
    condition ? value1 : value2;

let age = 20;

let output = age >= 18 ? "yes" : "no";

console.log(output);

yes

15 What is the difference between implicit and explicit type casting

implicit Type Casting
javaScript automatically converts one data type into another

explicit type casting
we manually convert the data type

16 What will be the output

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

123
NaN
1
0
false
true


17 What is NaN Give an example
NaN means Not a Number
it occurs when JavaScript tries to perform an invalid mathematical conversion or operation

console.log("hello" * 5);

18 What is the difference between if-else and switch

if-else is generally used when checking conditions or ranges

switch is useful when comparing one value against multiple fixed cases

19 What will be the output
let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

Adult

20 What is nested if  Give an example

if statement inside another if statement is called a nested if
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("allow");
    }
}

21 Write a program to check if a number is even or odd using ternary operator

let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);

22 What is the difference between while and do-while

while
the condition is checked before executing the loop

do-while
the code executes at least once, then checks the condition


23 What will be the output

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

1
2
3
4
5

24 What is the difference between for-of and for-in

for-of is used to get the values from an iterable such as an array
for-in is used to get the keys/indexes

25 Write a program to find sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);



26 What is the difference between slice and splice

slice()
used to copy a portion of an array
it does not change the original array

splice()
used to add, remove, or replace elements
it changes the original array

27 What will be the output

let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

[1, 2, 3]


28 What is the difference between function declaration and function expression

function declaration
the function is declared directly using the function keyword

function expression
function is stored inside a variable

29 What is an arrow function  Give an example

arrow function is a shorter way to write a function
let add = (a, b) => {
    return a + b;
};

30 What will be the output
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);

Hello

*/