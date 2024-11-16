
const secondEl = document.querySelector(".second")
const minutEl = document.querySelector(".minut")
const soatEl = document.querySelector(".soat")

function time() {
    const date = new Date();
    const second = date.getSeconds() / 60;
    const minut = (date.getMinutes() + second) / 60;
    const soat = (date.getHours() + minut) / 12;
    secondEl.style.transform = "rotate(" + (second * 360) + "deg)";
    minutEl.style.transform = "rotate(" + (minut * 360) + "deg)";
    soatEl.style.transform = "rotate(" + (soat * 360) + "deg)";

    setTimeout(time, 1);
}

time();

