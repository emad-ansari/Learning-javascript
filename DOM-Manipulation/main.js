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
// console.log(element);
element.style.backgroundColor = 'green'
function reverseOrder() {
    let ans = "";
    let string = document.getElementById("main-heading").innerText;
    // console.log(string);
    for (let i = string.length - 1; i >= 0; i--) {
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








// Root node
// const rootNode = document.documentElement;
// console.log("this is a root node : ",rootNode);

// console.log(document.body);
// console.log(document.head);


// childrens
// console.log(document.body.childNodes); // this will return a node object that will contain all nodes
// console.log(document.body.children) // this will return the HTMLcollection , note that it's look like array but it's not an array
// to convert onto array we can use Array.from() method 
// const childrenOfBody = Array.from(document.body.children); 


// firstChild and lastChild
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// Siblings
const divTag = document.body.children[0];
const firstDiv = divTag.children[0];
const secondDiv = divTag.children[1];
console.log(firstDiv.innerText) // this will print My Family Member
console.log(secondDiv.innerText)  // this will print Emad
console.log(secondDiv.nextElementSibling.innerText) // like this we can access previousSibling .



// document.getElementsByClassName("links")[0].style.color = 'green'


// change all external links color to green
function changeColor() {
    const internal_link = document.body.children[3].firstElementChild.innerText;


    const ul = document.getElementsByClassName("links");

    for (link of ul) {
        // I have to search for the link which is external and change the color to green
        // so let's serach first for the external link
        const external_link = link.innerText.search("http");

        if (external_link != -1 && (link.innerText != internal_link)) {
            // then I have to change the color to green
            // console.log(link)
            link.style.backgroundColor = 'green';

        }
        else {
            continue;
        }

    }


}
// changeColor()

