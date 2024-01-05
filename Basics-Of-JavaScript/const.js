// consţ : A variable that can not be changed.
// write a program to calculate area of circle 

const PI = 3.142;
let radius;
let area;
radius = window.prompt("Entter the radius : ");
radius = Number(radius);
area = PI * radius* radius;
console.log("Area of circle is : " , area);



// checkbox property
let MathButton = document.getElementById("Math-button");
let ScienceButton = document.getElementById("Science-button");
let HindiButton = document.getElementById("Hindi-button");
let EnglishButton = document.getElementById("English-button");
document.getElementById("submit-button").onclick = function(){
    if(MathButton.checked){
        console.log("You clicked on math");
    }
    else if(ScienceButton.checked){
        console.log("You clicked on Science");
    }
    else if(HindiButton.checked){
        console.log("You clicked on Hindi");
    }
    else if(EnglishButton.checked){
        console.log("You clicked on English");
    }
    else {
        console.log("You did not choose any option please select one option")
    }    
}

