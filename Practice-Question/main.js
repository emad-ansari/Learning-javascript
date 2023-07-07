// Create a function that returns rock, paper, or Scissors as randomly

const rockPaperScissors = () =>{
    let random = Math.random();  // this random function will generate random number between 0 to 1
    if(random < .33){
        return 'rock';
    }
    else if( random < .66 ){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// console.log(rockPaperScissors());


// Create a function that takes in a choice(rock, paper, scissors) and determines if they won a game of rock paper scissors against a bot 
//  using the above function
const rockPaperGame = (choice) =>{
    let player = choice;
    let computer = rockPaperScissors();
    
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    // if player === computer => return 'O'
    if(player === computer){
        return "You Tied";
    }

    else if((player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper') 
    || (player === 'paper' && computer === 'rock')){
        return "You Win";
    }
    else {
        return "You Lose";
    }  
}
// let choice = 'paper';
// console.log(rockPaperGame(choice));

//  Create a function that takes an array of choices. Play the game x times
// where x is the number of choices in the array. Print the results of each 
// game to the console.

let arr = ['rock', 'paper', 'rock', 'scissors', 'paper', 'paper', 'scissors', 'rock'];

const printResults = (arr) =>{
    // iterate over each element of array and pass each element in rockpaperGame method 
    arr.forEach(element => {
        let result = rockPaperGame(element);
        console.log(result);
    });
}
// printResults(arr);


// Create a function that takes in array of numbers
// Return a new array of numbers that is every original number squared

const numberSquare = (arr) =>arr.map((element) => Math.pow(element, 2)) ;
 
console.log( numberSquare([2,3,4,6,7]));

// Create a function that takes in a String 
// Print the reverse of that string to the console


function reverseString(str){
    let ans = "";
    for(let i = str.length - 1; i >= 0; i--){
        ans += str[i];
    }
    console.log("reverse String : " + ans);
    
}
// reverseString("powerfull");










