// write a logic to add the new family member into container

const nameInput = document.getElementById('input-name');

let students = JSON.parse(localStorage.getItem("Members")) || [];

// add Element to the array
const addMember = (name) =>{
    students.push({
        name
    });
    localStorage.setItem("Members", JSON.stringify(students));

    return { name };

}
const createElement = ( member_name ) =>{
    const container = document.getElementById('container');

    // lets create a new div
    const newDiv = document.createElement('div');
    newDiv.innerText = member_name.name;
    container.appendChild(newDiv);
    newDiv.setAttribute('class', 'list-items');
}

students.forEach(createElement);


const Onsubmit = () =>{
    const newMember = addMember(nameInput.value);
    createElement(newMember);

    // setting the input vlaue to default (empty string)
    nameInput.value = '';
}

const button = document.getElementById("add-member");
button.addEventListener('click', Onsubmit);