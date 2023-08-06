// console.log("This is my first java script learning day");
// console.log("Hello world!");
// window.alert("I really like pizza!");  // A pop massage will show on browser page


//  this is  single line comment in java script



/*
    this 
    is 
    multiple line comment
    in java script
*/

/*
    A variable is a container for storing data.
    A variable behaves as if it was value that it contains

    1. Declaring a variable : in java script mostly three type of keyword (data type) is used for declaring a varible
    (a) var
    (b) let
    (c) const


    2.Assignment: we can assign a value to a variable using a (= operator)

    
*/
let firstName = "Emad"; // string value 
let age = 21; // number value 
let student = true; // booleans value

// console.log( "Hello ",firstName);
// console.log("Your are " , age , "years old");
// console.log("Enrolled : " , student);
// document.getElementById("p2").innerHTML = "Hello " + firstName;
// document.getElementsByClassName("outer").innerHTML = red



/*
    Arithmatic expression is a combination of ..
    operand (valaues, variables ,etc.)
    operators(+, -, *, /, %)
    that can be evaluated a value
*/

// let student_Id = 12;
// student_Id = student_Id + 2;
// student_Id = student_Id / 3;

// or we can write above thing in short way as we write it in java and c++
// student_Id += 2;
// student_Id -= 3;
// student_Id /= 2;
// student_Id %= 5;
// console.log(student_Id);

/*
    Operator precedence 
    1. paranthesis ()
    2. exponents
    3. multiplication & division
    4. addition and subtraction

*/
// let result = 1 + 3 * (5 + 3);
// console.log("result : ", result);


/*
    How to accept user input: there are two ways to take input from user in java script

    1.Easy way: by using window prompt
    2.Difficult way : by using HTML box.
*/

// first way:
// let userName = window.prompt("What's your name?");
// console.log(userName);


// second way:
let userName;
document.getElementById("myButton").onclick = function () {
    userName = document.getElementById("input-text").value;
    console.log(userName);
}


/*
    Type conversion : changing the datatype of a value to another type
                       (string , number, boolean)

*/

// let myAge = window.prompt("What's your age : "); // this line will take an string input.
// myAge += 1;  // here myAge is of type string so it will concatenate '1' to the input .
// console.log(myAge , typeof myAge);
// console.log("Yoy are ", myAge , "years old");

// to convert a string value into number use constructor ->  Number(parameter)
// to convert a number value into string use constructor -> String(parameter).
// to check a type of a variable, whether its boolean or not, use -> Boolean(parameter); 

// let x;
// let y;
// let z;

// x = Number(myAge);
// console.log(x, typeof x);

// y = String(3.12); 
// console.log(y, typeof y); 


// y = String(12);
// console.log(y, typeof y);

// z = Boolean("");
// console.log(z, typeof z);

// z = Boolean("emad");
// console.log(z, typeof z);

// consţ : A variable that can not be changed.

// write a program to calculate area of circle 
// const PI = 3.142;
// let radius;
// let area;
// // radius = window.prompt("Entter the radius : ");
// radius = Number(radius);
// area = PI * radius* radius;
// console.log("Area of circle is : " , area);


/*

    Some important Math function that is used in java script
    1. Math.round() -> it round the value from 3.126 to 3
    2. Math.floor() -> it gives us floor value of number (eg. 5.199 -> 5)
    3. Math.ceil()  -> it gives us ceiling value of a number (eg. 5.12-> 6)
    4. Math.pow()   -> it is used to find the pow of a numebr
    5. Math.sqrt()  -> it is used to find a square root of a number
    6. Math.abs()   -> it gives us absolute value of a number (i.e. -4 = 4, -54.8 = 54.8 etc...)
    7. Math.Max()   -> it find the maximum value between number 
    8. Math.min()   -> it find the minimum value betweeen number
    9. Math.random()-> it creates random number

*/


// let maximum;
// let minimum;
// maximum = Math.max(4, 21, 90, 76);
// minimum = Math.min(-1, 2, 4, 5);
// console.log(maximum);
// console.log(minimum);

// write a program to calculate the hypotaneus of a right angle triangle 
// let base;
// let height;
// let hypotaneus;
// base = window.prompt("Enter the base of right angle triangle: ");
// height = window.prompt("Enter the height of right angle triangle : ");
// base = Number(base);
// height = Number(height);

// console.log("Hypotaneus : ");
// hypotaneus = Math.sqrt((Math.pow(base,2) + (Math.pow(height, 2))));
// console.log(hypotaneus);


let base;
let heig;
var hypo;
document.getElementById("calculate").onclick = function () {
    base = document.getElementById("base").value;
    heig = document.getElementById("height").value;
    base = Number(base);
    heig = Number(heig);
    hypo = Math.sqrt((Math.pow(base, 2) + (Math.pow(heig, 2))));
    document.getElementById("output").innerHTML = hypo;


}
const PI = 3.142;
let radius;
let area;
document.getElementById("find").onclick = function () {
    radius = document.getElementById("circle-radius").value;
    radius = Number(radius);
    console.log(radius, typeof radius);
    area = PI * Math.pow(radius, 2);
    console.log(area);
    document.getElementById("Area").innerHTML = area;
}


/*
   creating random number using Math.random function

*/
let v = Math.floor(Math.random() * 6) + 1;
console.log("above function generate random number");
console.log(v);

/*
    Some useful string function $ methods
    1.length -> this will give the length of a string.
    2.charAt() -> this function will give a character at a particular index.
    3.indexOf() -> this function will give a  index value of  a particular character in a string.
    4.lastIndexOf() -> this functiion will give the last index of a character in a string (eg. "bro code"  -> in this example first 'o' is at index number 2 and second is at index number 5)
    5.trim() ->  trim the extra space.
    6.replaceAll() -> this function will replace a particular character with another character.

*/
let Name = "Emad Ansari";
console.log(Name.length);
console.log(Name.charAt(6));
console.log(Name.indexOf('A'));
console.log(Name.lastIndexOf('a'));
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log("this is substring method : ", Name.substring(1));

let phoneNumber = "123-456-789";
console.log("before replacing the character : ", phoneNumber);
console.log("after replacing the character : ");
console.log(phoneNumber.replaceAll("-", "*"));

/*
    slice(inclusive_index , exculsive_index) method -> it extract a section of a string and 
    //                returns it as a new string,
    //                without modifying the orginal string.

*/
let fullName = "Emad Ansari";
let first_Name;
let last_Name;
// first_Name = fullName.slice(0, 5);
// last_Name = fullName.slice(5);

first_Name = fullName.slice(0, fullName.indexOf(" "));
last_Name = fullName.slice(fullName.indexOf(" ") + 1);

console.log(first_Name);
console.log(last_Name);


/*
    method chaining = calling one method after 
    //                another in one continuous line of code.
*/

let my_name = "Emad";
let letter = my_name.charAt(0).toLowerCase();
console.log(letter);


/*
    function => define code once and use it many times.
    to perform some code, call the function name.

*/

let _name = "Emad";
let _age = 21;
happyBirthday(_name, _age);
function happyBirthday(_name, _age) {
    console.log("happy birthday", _name, "you are", _age, "years old");
}

/*
    return => return a value back to the place where you invoked a fucntion

*/

let Area;
let width = window.prompt("Enter the width : ");
let height = window.prompt("Enter the height : ");
Area = AreaOfRectangle(width, height);
console.log("Area of rectangle is : ", Area);
function AreaOfRectangle(width, height) {
    return width * height;
}


/*
    Arrow function : Arrow functions are introduced in ES6, which provides you a more accurate way to write the functions in JavaScript. 
    They allow us to write smaller function syntax. Arrow functions make your code more readable and structured.
    Points :-
    1. Arrow functions are anonymous function(the function without name and not bound with identifier)
    2. They do not return any value and can declare without the function keyword.
    3. Arrow function can not be used as the constructor.
    4. They are also called as Lambda functions in different languages.

    Syntax : 
    const functionName = (arg1, arg2, ?..) => {  
    //body of the function  
    }  



*/

// In the following example, we are defining three functions that show Function Expression, Anonymous Function, and Arrow Function.

// functin expression 
var myfun1 = function show() {
    console.log("It is a function expression");
}

// Anonymous function

var myfun2 = function () {
    console.log("It is an anonymous function");
}

// Arrow function 
var myfun3 = () => {
    console.log("It is an Arrow function");
}

myfun1();
myfun2();
myfun3();


// Arrow function with parameters

var show1 = (a, b, c) => {
    console.log(a + " " + b + " " + c);
}

show1(100, 200, 300);

// Arrow function with default parameters
var show2 = (a, b = 200) => {
    console.log("I am default arrow function" + a + " " + b);
}

show2(500);

/*
    ternary operator => shortcut for an if/else statements
    
    it takes three operands
    1. a condtion with ?
    2. expression if true
    3. expression if false

    Syntax : (condition) ? exprIfTrue : exprIfFalse
*/

let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
    return (age >= 18) ? true : false;
}


/*
    let => variables are limited to block scope {}
    var => variable are limited to functions scope(){}
*/

for (let i = 0; i <= 3; i++) {
    console.log(" i is accessible inside block scope")
}
// console.log(i) -> this will give error

for (var j = 0; j <= 2; j++) {
    console.log("I am var variable and is accessible inside block scope");
}
console.log("I am var variable and is accessible outside block scope");

// Another example that illustrate the difference between var and let

// Declare a global variable with var
var globalVar = "Global var";

// Declare a global variable with let
let globalLet = "Global let";

{
    var localVar = "Local var";
    let localLet = "Local let";

    console.log(localVar); // Output: "Local var"
    console.log(localLet); // Output: "Local let"

}

console.log(globalVar); // Output: "Global var"
console.log(globalLet); // Output: "Global let"

console.log(localVar); // Output: "Local var"
//   console.log(localLet); // Output: Uncaught ReferenceError: localLet is not defined



// Template literals => delimited with(`)
//                      instead of double or single quotes
//                      allows embedded variables and expression.

let _UserName = "Emad";
let items = 4;
let total = 100;

// console.log("Hello", _UserName);
// console.log("you have", items, "items in your cart");
// console.log("your total cost is $", total);

// we can do the samething in different way
console.log(`Hello ${_UserName}`);
console.log(`you have ${items} items in your cart`);
console.log(`your total cost is  $${total}`);


let text = `Hello ${_UserName} you have ${items} items in your cart
your total cost is  $${total}`;
document.getElementById("myLabel").innerHTML = text;


/*
    toLocaleString() => it returns a string with a language
    //                  sensitive representation of number

    number.toLocaleString(locale , {options});
    'locale' = specify that language (undefined = default set in browser)
    'option' = object with formatting options1
    
*/

let myNum = 100;
// myNum = myNum.toLocaleString("en-US") // US english

// myNum = myNum.toLocaleString("hi-IN"); // Hindi

// myNum = myNum.toLocaleString("de-DE"); // standard German


// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});


myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });


console.log(myNum);


/*
    array => array are data structure that can store multiple values of same type. 


*/

let fruits = ["mango", "banana", "orange"];
/*  
   1.fruits.push("lemon");      -> add an element
   2.fruits.pop();              -> removes last element
   3.fruits.unshift("apple");   -> add element to begining
   4.fruits.shift();            -> removes element from begining
   5.fruits.sort()              -> sort the array element
   6.reverse()                  -> it reverse the array
*/
// let length = fruits.length;
// let index = fruits.indexOf("banana");
console.log(fruits);

// printing the ellement of array using two types of for loop

let prices = [2, 4, 19, 20, 5];
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}

// another for loop
for (let price of prices) {  // for every element (price) in my prices array 
    console.log(price);     // print that price
}



// 2D array = An array of array
let vegetables = ["carrots", "onion", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

for (let list of groceryList) {
    for (let items of list) {
        console.log(items);
    }
}

/*
    Spread operator(...) = allows an iterable such as an 
    //                array or string to be expanded 
    //                in places where zero or more arguments 
    //                are expected 

*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers); // this will not spread 
// console.log(...numbers);  // this will spread

// another use case of spread operator
let maximum = Math.max(numbers);  // this will give Nan
maximum = Math.max(...numbers);  // this will work and print 9
console.log(maximum);

// another use case
let class1 = ["Emad", "Shahma", "Hamid Raza"];
let class2 = ["Arsalan", "Rehan", "Farhan"];
class1.push(...class2);
console.log(...class1);

/*
    rest parameter = represents an indefinite number of parameters
    
*/
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}


/*
    forEach() method -> It itereates through each element of an array once, 
    A function that accepts up to three arguments. forEach calls the callbackfn
    function one time for each element in the array.
    Performs the specified action for each element in an array.

*/
let bestColors = ['red', 'green', 'blue', 'Yellow'];
// using forEach() method we can print all element of array
bestColors.forEach((x, i) => console.log(x));

// printing fibonacci series with the help of forEach() method

let Sum = 0;
var arr = [10, 18, 12, 20];

arr.forEach((fetchElement) => {
    Sum = Sum + fetchElement;
    console.log(Sum);
});


// create an array of numbers. loop through the array and add three to each number
// and replace the old number.
let number = [1, 2, 3, 4, 5];

number.forEach((num, index) => {
    // num = num + 3;
    // number[index] = num;

    // above two line of code can be witten in one line as following
    number[index] = num + 3;

});

console.log("Print all the number after modifying : ");
for (let items of number) {
    console.log(items);
}

let Total = 0;
// find the average of all the number from question three
number.forEach(function (element) {
    Total += element;
});
let Average = Total / number.length;
console.log(Average);

// create a function that takes in array of numbers. Multiply each number together
// and alert the product

let nums = [10, 20, 30];
multiPlyArrayelement(nums);
function multiPlyArrayelement(arr) {
    let product = 1;
    arr.forEach((items) => {
        product *= items;
    });
    alert("Product of all element of array is : " + product);

}

// create a function that takes in an array of numbers. Return a new array containing 
// every even number from the original array (do not use map or filter)
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = evenNumberArray(array);
console.log(...newArray);
function evenNumberArray(arr) {
    let list = [];
    arr.forEach((num) => {
        if (num % 2 === 0) {
            list.push(num);
        }
    });
    return list;
}

/*
// map() method : In JavaScript, the map() function is a higher-order function that is used to transform elements in an array. 
//               It creates a new array by applying a provided function to each element of the original array. The map() function
//               does not modify the original array; instead, it returns a new array with the transformed elements.
   Where can we use map function??
   Remember, the map() function is suitable for scenarios where you want to transform each element of an array while
   maintaining the original array's length. If you need to perform more complex operations that involve aggregating values or
   conditionally modifying elements, other array methods like reduce() or forEach() might be more appropriate.
*/

const citiesNames = ['NY', 'La', 'TX'];
const _Lowercase = citiesNames.map((element) => {
    return element.toLowerCase();
});
console.log(..._Lowercase);

// another use caes of map function
const numArray = [15, 1, 3, 2, 6];

// do double -[10, 2, 6, 4, 12]
const Double = numArray.map(double);
function double(x) {
    return x * 2;
}
console.log("This is double value of given array : " + Double);


// do triple -[15, 3, 9, 6, 18]

const Triple = numArray.map(triple);
function triple(y) {
    return y * 3;
}
console.log("This is triple vlaue of given array : " + Triple);

// do Binary -['101', '1', '11', '10', '110']

const Binary = numArray.map((binary) => {
    return binary.toString(16);  // it  Returns a string representation of an object.
    //                            // this can also be used for converting one number system to another number system. just pass the base in which you want to convert
});
console.log("This is bonary value of given array : " + Binary);



// filter() function : It will not return the actual ouput but It will return the filtered element from a given array according to written filter logic.

// filter the odd number from given array (numArray).
const output_odd = numArray.filter(isOdd);
function isOdd(x) {
    return x % 2;
}
console.log("All odd number : " + output_odd);


// filter all even number from given array.
const output_even = numArray.filter(isEven);

function isEven(x) {
    return x % 2 === 0;
}
console.log("All even number : " + output_even);

// reduce(function, accumulator) method : Note that as it's name suggest reduce but it does not reduce any thing
//                   It takes two parameter()

// analyse the following example

// find the sum 

const output_sum = numArray.reduce(findSum, 0);

function findSum(accumulator, current_value) {
    accumulator += current_value;
    return accumulator;
}
console.log("Sum of all element of an array : " + output_sum);


// find the max element
const output_max = numArray.reduce((maxElement, current_value) => {
    if (current_value > maxElement) {
        maxElement = current_value;
    }
    return maxElement;
}, 0);
console.log("Maximum element from given array : " + output_max);



/*
    callback => a function passed as an argument to another function

    It ensures that a function is not going to run
    before a task is completed.
    It helps us to develop asynchronus code.
    (when one function has to wait for another function)
    that helps us avoid errors and potential problems
    eg. wait for a file to load
*/

sum(2, 3, displayDom);

function sum(x, y, callBack) {
    let result = x + y;
    if (typeof callBack === 'function') {
        callBack(result);
    }

}

function displayDom(output) {
    console.log(output);
}