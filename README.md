# Sierpinski triangle fractal

Eazy-peasy lemon-squeezy little practice of mine.
Fractals are cool, aren't they?

## To play around

* Start / continue — start drawing a fractal or continue after a pause
* Pause — pause drawing, can be continued
* Clear — stop drawing, clear the canvas

Iteration count is pretty obvious

## Code structure

* script.js initializes the app
* modules/calculator.js provides the positions of triangle's apexes and a function to calculate the next point to draw
* modules/drawer.js provides a canvas, functions to draw initial pins and all the dots and a function to clear the canvas