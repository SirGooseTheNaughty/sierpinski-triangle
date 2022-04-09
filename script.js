import useCalculator from "./modules/calculator.js";
import useDrawer from "./modules/drawer.js";

const { canvas, drawDot, drawPin, clearCanvas } = useDrawer();
const { pins, calcNextPoint } = useCalculator(canvas);

const controls = {
    start: document.querySelector('.start'),
    pause: document.querySelector('.pause'),
    clear: document.querySelector('.clear'),
};
const counter = document.querySelector('.iterations__counter');
let isPlaying = false;
let iteration = 0;

function showIteration() {
    counter.textContent = ++iteration;
}
function placePins() {
    drawPin(pins[0]);
    drawPin(pins[1]);
    drawPin(pins[2]);
}
function start() {
    isPlaying = true;
    loop();
}
function pause() {
    isPlaying = false;
    controls.start.textContent = 'Continue';
}
function clear() {
    pause();
    clearCanvas();
    placePins();
    iteration = 0;
    counter.textContent = 0;
    controls.start.textContent = 'Start';
}
function loop() {
    if (isPlaying) {
        const point = calcNextPoint();
        drawDot(point);
        requestAnimationFrame(loop);
        showIteration();
    }
}

controls.start.addEventListener('click', start);
controls.pause.addEventListener('click', pause);
controls.clear.addEventListener('click', clear);
placePins();