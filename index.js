const myLeads = [
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
];
let inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(inputEl.value);
});

// Log out the items in the myLeads array using a for loop

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}

// ********
