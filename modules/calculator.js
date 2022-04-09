function useCalculator(canvas) {
    const pins = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
    let current;

    (function placePins() {
        const trHeight = canvas.height - 100;
        pins[0].x = canvas.width / 2;
        pins[0].y = 50;
        pins[1].y = canvas.height - 50;
        pins[2].y = canvas.height - 50;
        const halfSide = Math.floor(trHeight * Math.tan(30 * Math.PI / 180));
        pins[1].x = (canvas.width / 2) + halfSide;
        pins[2].x = (canvas.width / 2) - halfSide;
    })();

    function getRandomPin() {
        const rand = Math.random() * 3;
        if (rand > 2) {
            return pins[2];
        }
        if (rand > 1) {
            return pins[1];
        }
        return pins[0];
    }

    const calcNextPoint = () => {
        if (current) {
            const pin = getRandomPin();
            const next = {
                x: (current.x + pin.x) / 2,
                y: (current.y + pin.y) / 2,
            };
            current = next;
            return next;
        }
        const next = getRandomPin();
        current = next;
        return next;
    }

    return { pins, calcNextPoint };
}

export default useCalculator;