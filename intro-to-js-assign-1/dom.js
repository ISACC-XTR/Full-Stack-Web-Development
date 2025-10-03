// Changing text content with JavaScript
let changeThisText = document.getElementById("changeThisText");
const clickToChange = document.getElementById("clickToChange");

clickToChange.addEventListener("click", function () {
    changeThisText.textContent = "Hello, JavaScript!";
    console.log("The paragraph was changed to 'Hello, JavaScript!'");
});

///// ###########################################
const box = document.getElementById("box");
const colorInput = document.getElementById("colorInput");
const changeBoxColor = document.getElementById("changeBoxColor").addEventListener("click", function () {
    const input = colorInput.value;
    box.style.background = input;
    box.style.color = "white";
    console.log("You just changed the box background color to blue and text color to white");
})

//// #############################################

const parent = document.getElementById("parent");
const clickToAddNewList = document.getElementById("clickToAddNewList").addEventListener("click", function () {
    const newChild = document.createElement("li");
    newChild.textContent = "New List";
    parent.appendChild(newChild);
    console.log("You just added a new list item to the unordered list");
});

//################################################

const parent2 = document.getElementById("parent2");
const removeButton = document.getElementById("removeButton").addEventListener("click", () => {

    if (parent2.children.length > 0) {
        console.log("true")
        const lastChild = parent2.lastElementChild;
        parent2.removeChild(lastChild);
        console.log("You just removed the last item from the unordered list");
    } else {
        console.log("Nothing to remove!")
    }
})

//###################################################

const userInput = document.getElementById("userInput");
const changeMe = document.getElementById("changeMe");
const sendText = document.getElementById("sendText");

let move;
sendText.addEventListener("click", () => {
    move = userInput.value;

    if (move) {
        changeMe.textContent = move;
        console.log("You just changed the paragraph to: " + move);   
    } else {
        console.log("Input field is empty!")
    }

})