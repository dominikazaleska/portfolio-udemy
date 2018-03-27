var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	ul.appendChild(li);	
	var deleteButton = document.createElement("button");	
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listItemDone(event) {
	var li = event.target.parentElement;
	var itemName = li.children[0];
	var deleteButton = li.children[1];
	if (event.target == itemName) {
		itemName.classList.toggle("done");
	}
}

function deleteListItem(event) {
	var li = event.target.parentElement;
	var deleteButton = li.children[1];
	if (event.target == deleteButton) {
		ul.removeChild(li);	
	}

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", listItemDone);

ul.addEventListener("click", deleteListItem);
