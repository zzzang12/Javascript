const clock = document.querySelector("#clock");

function getTime() {
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);