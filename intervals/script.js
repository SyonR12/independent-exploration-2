// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function displayTime() {
    time++;
    counterElement.innerHTML = time;
}

setInterval(displayTime, 1000);