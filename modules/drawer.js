function useDrawer() {
    const canvas = document.querySelector('canvas');
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    const context = canvas.getContext('2d');
    context.fillStyle = 'black';

    const drawPin = ({ x, y }) => {
        const figure = new Path2D();
        figure.rect(x - 5, y - 5, 10, 10);
        context.fill(figure);
    }

    const drawDot = ({ x, y }) => {
        const figure = new Path2D();
        figure.rect(x, y, 1, 1);
        context.fill(figure);
    }

    const clearCanvas = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    return { canvas, drawDot, drawPin, clearCanvas };
}

export default useDrawer;