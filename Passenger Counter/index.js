//document.getElementById("count-el").innerText=5
let countEl = document.getElementById("count-el");
//debugging, check if working
// console.log(countEl)
let count = 0;
let saveEl = document.getElementById("save-el");
function increment() {
  count += 1;
  countEl.innerText = count;
}
function resetCounter() {
  count = 0;
  countEl.innerText = count;
}
function clearEntry() {
  saveEl.innerText = "";
}
function decrement() {
  if (count > 0) {
    count -= 1;
    countEl.innerText = count;
  }
}
function initialise() {
  saveEl.innerText = "Previous Entries: ";
}
function save() {
  if (saveEl.innerText == "") {
    initialise();
  }
  saveEl.textContent += count + " - ";
  resetCounter();
}
