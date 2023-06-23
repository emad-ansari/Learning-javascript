// consţ : A variable that can not be changed.

// write a program to calculate area of circle 
const PI = 3.142;
let radius;
let area;
radius = window.prompt("Entter the radius : ");
radius = Number(radius);
area = PI * radius* radius;
console.log("Area of circle is : " , area);
