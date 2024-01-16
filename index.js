// Write your code here!
const main = document.getElementById("main");
main.remove();
const h1 = document.createElement("h1");
h1.id = 'victory';
h1.textContent = 'is the champion';
const newHeader = h1
document.body.append(newHeader);