// java Script objects

/*
  Objects : 
  1. Objects are a collection of variables and function
  2. Objects represents the attributes and behaviour of something used in program
  3. Object variables are called properties and object function are called methods
  4.

*/

// follow object are created using literal notation 
let stopWatch = {};  // stopWatch is an object

// set the four properties and three behaviour of stopWatch

stopWatch.brand = 'Nike';
stopWatch.color = 'black';
stopWatch.shape = 'rounded';
stopWatch.size = 'medium';

// defining three method/behaviour
stopWatch.start = function(){
    console.log('stopWatch started.....');
}

stopWatch.stop = function(){
    console.log('stopWatch stttoooped!');
}

stopWatch.sayBrand = function (){
    console.log(stopWatch.brand);
}

// Declare a variable assign it a string of multiple words, and check
// to see if one of the words is 'apple' or not

let str = "I like apple very much. It is a healthy fruits";
// console.log(str.search('apple'));
const check = (str, target) =>{
    // if(str.search(target) != -1){
    //     return true;
    // }
    // return false;
    // using teranry operator
    return (str.search(target) != -1)? true : false;  
    // NOTE : Search() method -> If ans find it return the index value of first chracter of target string.
    //                           If ans not find, it returns (-1)
}
let target = 'apple';
console.log(check(str, target));


// Create a mouse object that has four properties and three methods using constructor function

function Mouse(color, brand, button, scroll){
    this.color = color;
    this.brand = brand;
    this.button = button;
    this.scroll = scroll;
    this.clickOn = function(){
        console.log('mouse have two button that are clickable');
    }
    this.scrollOn = function(){
        console.log('mouse have a scroll button that scroll up and down the page')

    }
}
let dell_mouse = new Mouse('white', 'apple', 'right and left button');



// two different ways to create an object
// 1. Factory function

function createCircle(radius){
    return {
        radius: radius,
        draw : function(){
            console.log(`draw a circle of radius ${radius}`);

        }
    };
}
const circle = createCircle(2);
circle.draw();

// 2. Constructor function

function Circle (radius){
    this.radius = radius;
    this .draw = function(){
        console.log(`draw a circle of radius ${radius}`);
    }
}
const another = new Circle(5);
another.draw();
