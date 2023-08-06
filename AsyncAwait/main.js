// Async/Await : await waits for async process to complete inside a Async function
function houseOne(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve('Paper delivered to house 1')
        }, 1000)

    });
 
}

function houseTwo(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve('Paper delivered to house 2')
        }, 1000)

    });
}

function houseThree(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve('Paper delivered to house 3')
        }, 1000)

    });
}

async function getPaid(){
    const houseOnePaid = await houseOne();
    console.log(houseOnePaid);
    const houseTwoPaid = await houseTwo();
    console.log(houseTwoPaid);
    const houseThreePaid = await houseThree();
    console.log(houseThreePaid);
}

getPaid();


// make a API request using async await

async function getDataFromAPI() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const res = await fetch(url);
    const data = await res.json();
    document .querySelector('img').src = data.message;
    console.log(data);
}

getDataFromAPI(); 