

const contactsList = ["Tom:647-123-4567", "Bobby:647-234-5678", "Jerry:416-202-4421", "Jake:719-349-2139"];
const paragraph = document.getElementById("paragraph");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const contactDiv = document.querySelector(".contactsList");
const addContactInput = document.getElementById("add");
const addContactNum = document.getElementById("num");
const addContactBtn = document.getElementById("addBtn");

btn.addEventListener("click", function() {

    let searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();

    for(let i = 0; i < contactsList.length; i++) {
        let currentContact = contactsList[i].split(":");
        if (currentContact[0].toLowerCase() == searchName) {
            paragraph.textContent = currentContact[0] + "'s number is: " + currentContact[1];
            document.getElementById("output").style.backgroundColor = "#6486FF";
            break;
        } else {
            paragraph.textContent = "Whoops! Look’s like that contact does not exist."
            document.getElementById("output").style.backgroundColor = "#FF525C";
        }
    }
 });

 addContactBtn.addEventListener("click", function() {

    let newName = addContactInput.value.charAt(0).toUpperCase() + addContactInput.value.slice(1);
    let newNum = addContactNum.value;
    let error = document.getElementById("error");
    let regex = /^[a-zA-Z]+$/;
    let numRegex =  `[1-9]{1}[0-9]{9}`;

    //create new list element
    let listElement = document.createElement("div");
    listElement.className = "list-item";

    let listBtn = document.createElement("button");
    listBtn.className = "cl-btn";

    if (newName == "" || newNum == "") {
        error.style.display = "block";
        error.textContent = "Fill all fields";
        error.style.color = "black";
    } else if (!newName.match(regex)) {
        error.style.display = "block";
        error.textContent = "Name field must be only letters";
    }
    else if (!newNum.match(numRegex)){
        error.style.display = "block";
        error.textContent = "Number field must contain 10 digits";    
    }
    else {
        addContactInput.value = "";
        addContactNum.value = "";
        error.style.display = "none";  
        let outputNum = newNum.slice(0, 3) + "-" + newNum.slice(3,6) + "-" + newNum.slice(6,10);
        let newContact = newName + ":" + outputNum;
        contactsList.push(newContact);
        console.log(contactsList);

        listElement.appendChild(document.createTextNode(newName));
        listBtn.appendChild(listElement);
        contactDiv.appendChild(listBtn);

    }
 });
