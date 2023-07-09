/*
    Structure of DOM Manipulation :
    1. What is DOM{
        a. Document Object Model
        b. Use it to manipulate content, style and structure
        c. Is one of the most unique and useful tools of java script
    }
    2. Methods to select Element in the DOM
    3. How to Traverse the DOM
    4. How to Manipulate the DOM
    5. Event Handling



*/

// Selectors : 

// 1. getElementById()

const element = document.getElementById("main-heading");
console.log(element);
element.style.backgroundColor = 'green'
function reverseOrder(){
    let ans = "";
    let string = document.getElementById("main-heading").innerText;
    // console.log(string);
    for (let i = string.length - 1; i >= 0 ; i--){
        ans += string[i];
    }
    document.getElementById("main-heading").innerText = ans;
  

}
// reverseOrder();

//2. getElementsByClassName()

// const list_items = document.getElementsByClassName("list-items");  // it return a HTMLcollection of all the element which have className = "list-items"

// console.log(list_items);



// 3. getElementBYTagName()
// it is same as getElementByclassName() 


// 4. querySelector()

// const container = document.querySelector('div');
// console.log("this is a container : " , container);



// 5.querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log("this is a container : " , container);


// Creating Elements
let Button = document.getElementById("add-member");
Button.onclick = ()=>{
    let new_member_name = document.getElementById("input-name").value;
    let container = document.getElementById("container");
    // creating a new div element inside container
    let newDiv = document.createElement('div');

    // Adding new elements to main container
    container.append(newDiv);

    // Modifying/set the value(Name) of new member
    newDiv.innerText = new_member_name;


    // Modifying Attributes and classes
    newDiv.setAttribute('class', 'list-items')
}
