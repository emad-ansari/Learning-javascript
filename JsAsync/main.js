console.log("Hello world")


// 1. Callbacks : A callback is a function passed as an argument to another function
// Simple example of call back function
// 2. Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
// 3. In the real world, callbacks are most often used with asynchronus functiion
// 4. A typical example is setTimeout() function in javascript
// 5. NOTE : when you pass a function as an argument, remember not to use parenthesis

function calculate(num1, num2, callBack){
    // calculate the sum of num1 and num2
    const result = num1 + num2;

    callBack(result); // this is call back function
   
}


function displayResult(input){
   
    document.querySelector("p").innerHTML = "Result : " + input;
}

// call the calculte function 
// calculate(10,30, displayResult);


// Another example of call back function

const arr = [4, 1, -20, -7, 5, 9, -6];

// below function will check whether a number is negative or not
function checkNegative(x){
    return x >= 0;
}
// remove negative number

function removeNegative(myArr, checkNegative){
    const myArray = [];
    for (const element of myArr){
        // if x is positive then add it to myArray
        if(checkNegative(element)){
            myArray.push(element);
        }
    }
    console.log(...myArray);
}
// call the removeNegativve function
// removeNegative(arr, checkNegative);

// another example of callback

console.log("Start");
let id = document.getElementById("Btn");
id.addEventListener('click', showSomething);
function showSomething(){
    console.log("callback example");
}
console.log("End");

/* 
// Asynchronus function :  "I will finish later", function running in parallel with another function are called as Asynchronus function
*/

// Waiting timeout : when using a javaScript function setTimeout(), we can specify the callback function to be executed on time-out

setTimeout(myFunction, 5000); // it means that myFunction will excecute after 5000ms(or 5s)
console.log("Start");

function myFunction(){
    console.log("I will execute after 5 second");
}


console.log("End");
console.log("awiat....");


// Waiting for intervals
// When using java Script function (setInterval()), you can specify a callback funtion to be executed for each interval

setInterval(getTime, 1000);
function getTime(){
    // creating a new object of Date() constructor
    let d = new Date();
    document.getElementById("showTime").innerHTML = "Time : " +
    d.getHours() + ":" +
    d.getMinutes() + ":" + 
    d.getSeconds();
}


// Promises : A promises is a javaScript objects that links producing code and cosnuming code
//            Promises takes a function and that function takes two parameter 
//            (a) Resolve
//            (b) Reject
// Promises objects properties 
/*
    A javaScript promises object have three state:
    1. Pending
    2. fulfilled
    3. Rejected

    The promises object supports two properties : state and result
    While promises object is "Pending"(working), the result is undefined
    While a promises object is "Fulfilled", the result is a value
    While a Promises object is "Rejected", the result is an error object


*/

function fun1(age){
    return new Promise((resolve, reject) =>{
        if(age >= 18){
            resolve(`You are a special citizen as you are ${age} years old`)
        }
        else {
            reject(`you are not able to give  vote because you are lese than 18 years old`)
        }

    });
}

function ifResovle(message){
    console.log(message);
}

function ifReject(error){
    console.log(error);
}


fun1(20)
.then(ifResovle)
.catch(ifReject)


// Another example of Promises 
function getWeather(weather){
    return new Promise((resolve, reject)=> {
       setTimeout(()=>{
        resolve(weather);
       }, 100)
    });

}
function getIcon(state){
    return new Promise((resolve, reject) =>{
        switch(state){
            case 'sunny':
                resolve('☀️');
                break;
            case 'rain': 
                resolve('🌧️');
                break;
            default:
                reject('Error!!!');   
                break;
        }
    });

}

function displayResult(input){
    const id = document.getElementById("demo");
    id.innerHTML = input;

}


function onReject(error){
    const id = document.getElementById("demo");
    id.innerHTML = error;


    // console.log(id);

    
}
getWeather('sunny')
    .then(getIcon)
    .then(displayResult)
    .catch(onReject);



