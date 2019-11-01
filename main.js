// DOM Selection
// const search = document.querySelector("#search");
const searchItem = document.querySelector("#search-input");
const form = document.querySelector("#new-item-form");
const newItem = document.querySelector("#new-item");
const items = document.querySelector("#items");

// Add new item to the List
const getItem = e => {
  e.preventDefault();

  if (newItem.value) {
    // New Item
    let newChild = document.createElement("li");
    newChild.className = "list-group-item";
    newChild.innerHTML = newItem.value;
    items.appendChild(newChild);

    // close Button
    let newChildCloseBtn = document.createElement("button");
    newChildCloseBtn.className = "btn btn-sm btn-danger float-right";
    newChildCloseBtn.innerText = "X";
    newChild.appendChild(newChildCloseBtn);

    // Clear input field
    newItem.value = "";
  }
};

const closeItem = e => {
  if (e.target.tagName === "BUTTON") {
    let result = confirm("Are you sure to delete?");
    if (result) {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }
};

const filterItems = e => {
  if (e.target.value) {
    let itemName = e.target.value.toLowerCase();
    let one = items.children;

    for (let i = 0; i < one.length; i++) {
      if (one[i].innerText.toLowerCase().indexOf(itemName) != -1) {
        one[i].style.display = "block";
      } else {
        one[i].style.display = "none";
      }
    }
  } else {
    let one = items.children;

    for (let i = 0; i < one.length; i++) {
      one[i].style.display = "block";
    }
  }
};

// console.dir(items.children);

searchItem.addEventListener("keyup", filterItems);

items.addEventListener("click", closeItem);
// listen for Event
form.addEventListener("submit", getItem);
