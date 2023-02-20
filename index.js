const myLeads = [
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
];
// 2. Grab the unordered list and store it in a const variable called ulEl
let ulEl = document.getElementById("ul-el");
let inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
console.log(ulEl);

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(inputEl.value);
});

// Log out the items in the myLeads array using a for loop
// Replace .textContent with .innerHTML and use <li> tags
// for (let i = 0; i < myLeads.length; i++) {
//   console.log(myLeads[i]);
//   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
// create element
// set text content
// append to ul
// const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEl.append(li);
// }

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
  listItems += "<li>" + myLeads[i] + "</li>";
}
console.log(listItems);
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;
