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
document.getElementById("myButton").onclick = function(){
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

// y = String("3.12"); 
// console.log(y, typeof y); 


// y = String("emad");
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


let b; 
let a;
var hypo;
document.getElementById("calculate").onclick = function () {
    b = document.getElementById("base").value;
    a = document.getElementById("height").value;
    b = Number(b);
    a = Number(a);
    hypo = Math.sqrt((Math.pow(b,2) + (Math.pow(a, 2))));
    document.getElementById("output").innerHTML = hypo;


}
const PI = 3.142;
let radius;
let area;
document.getElementById("find").onclick = function(){
    radius = document.getElementById("circle-radius").value;
    radius = Number(radius);
    console.log(radius , typeof radius);
    area = PI * Math.pow(radius ,2);
    console.log(area);
    document.getElementById("Area").innerHTML = area;
}


 /*
    creating random number using Math.random function

 */ 
let v = Math.floor(Math.random() *6) + 1;
console.log("below function generate random number");
console.log(v);

/*
    Some useful string function $ methods
    1.length -> this will give the length o fa string
    2.charAt() -> this function will give a character a  particular index
    3.indexOf() -> this function will give a  index value of  a particular character in a string
    4.lastIndexOf() -> this functiion will give the last index of a character in a string (eg. "bro code"  -> in this example first 'o' is at index number 2 and second is at index number 5)
    5. trim() ->  trim the extra space
    6.replaceAll() -> this function will replace a particular character with another character

*/
let Name = "Emad Ansari";
console.log(Name.length);
console.log(Name.charAt(6));
console.log(Name.indexOf('A'));
console.log(Name.lastIndexOf('a'));
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());

let phoneNumber = "123-456-789";
console.log("before replacing the character : " , phoneNumber);
console.log("after replacing the character : " );
console.log(phoneNumber.replaceAll("-", "*"));

/*
    slice(inclusive_index , exculsive_index) method -> it extract a section of a string and 
    //                returns it as a new string,
    //                without modifying the orginal stirng

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



