const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}

function stop() {

    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    document.getElementById("display").textContent = "00:00:00:00";
    elapsedTime = 0;
    isRunning = false;
}

function update() {

    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}