

const contactsList = ["Tom:647-123-4567", "Bobby:647-234-5678", "Jerry:416-202-4421", "Jake:719-349-2139"];
const paragraph = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

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