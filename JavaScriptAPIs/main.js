console.log('Hello world');


// java Script APIs 
/*  
   (Application programming Interface)A software interface that allows two applications to talk to each other

    1. A simple interface for some complex action
    2. Think of a restaurant menu! 
    3. Lets one thing communicate with another thing
    4. Without having to know how things are implemented

    NOTE : when we fetch any data from any api, it returns JSON object



*/

function fetchData() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            // console.log( data.message);
            document.getElementById('dog-image').src = data.message;

        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
        })
}
// fetchData();

document.querySelector('h2').innerText = localStorage.getItem('Books');
document.getElementById('Btn').addEventListener('click', getData);
function getData() {
    const isbnNumber = document.getElementById('input').value;
   
    if (isbnNumber === '') {
       
        document.querySelector('h2').innerText = localStorage.getItem('Books');
    }
    else {
        const url = `https://openlibrary.org/isbn/${isbnNumber}.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.title);
                // put titlt into localStorage.
                if( !localStorage.getItem('Books')){ // if localStorage is empty then first add title to it an
                    localStorage.setItem('Books', data.title);
                }
                else {
                    let books = localStorage.getItem('Books') + " ; " + data.title;
                    localStorage.setItem('Books', books);
                }
               
                document.querySelector('h2').innerText = localStorage.getItem('Books');

            });

    }

}
