let counter = 0;

// Fetch the increment button
const incre = Array.from(document.getElementsByClassName("increment"))[0];

// Fetch the decrement button
const decre = Array.from(document.getElementsByClassName("decrement"))[0];

// Fetch the reset button
const res = Array.from(document.getElementsByClassName("reset"))[0];

// Fetch the counter display element
const div = Array.from(document.getElementsByClassName("counter"))[0];
console.log(div);

function increment(){
    counter++;
    div.innerText = counter;
}

function decrement(){
    counter--;
    div.innerText = counter;
}

function reset(){
    counter = 0;
    div.innerText = counter;
}

// Add Event Listeners
incre.addEventListener("click", increment);
decre.addEventListener("click", decrement);
res.addEventListener("click", reset);









