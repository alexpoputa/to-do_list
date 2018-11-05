// Variables
var ul = document.getElementById('list');
var add = document.getElementById('addBtn');
var input = document.getElementById('text');

// Add list item with Enter key
input.addEventListener("keyup", function (event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("addBtn").click();
    }
});

add.onclick = () => {
    addList(ul);
};

// Create more variables and set the input field to be empty
function addList(myUl) {
    var inputText = document.getElementById('text').value;
    var list = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    document.getElementById('text').value = '';

    // If the input field is empty,show an alert
    if (inputText.split(' ').join('').length === 0) {
        alert('Please write a task');
        return false;
    }

    // Init remove button for list elements
    removeButton.className = 'removeMe';
    removeButton.innerHTML = 'X';
    removeButton.setAttribute('onclick', 'removeMe(this);');

    list.appendChild(textNode);
    list.appendChild(removeButton);

    myUl.appendChild(list);
}

// Remove button functionality
function removeMe(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}


// function toDo() {
//     //VARIABLES
//     var item = document.getElementById("inputItem").value;
//     var textInput = document.createTextNode(item); // create new text
//     var newItem = document.createElement("li"); // create new list element
//     newItem.appendChild(textInput); // append the new text element to the new list element
//     document.getElementById("list").appendChild(newItem); // append the new elements to the list

//     var deleteButton = document.createElement('button'); // delete button
// }