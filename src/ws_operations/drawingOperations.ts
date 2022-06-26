import { getMousePos, dragMouse } from 'robotjs';

export const drawCircle = (radius: number) => {
    const { x, y } = getMousePos();

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const nextX = x + (radius * Math.cos(i));
        const nextY = y + (radius * Math.sin(i));

        dragMouse(nextX, nextY);
        console.log(`CIRCLE: dragMouse(${nextX}, ${nextY})`)
    }
}

export const drawRectangle = async (width: number, height: number) => {
    // right
    let { x, y } = getMousePos();
    console.log(`SQUARE START: ${x}, ${y}`)

    await dragMouse(x + width, y);
    console.log(`SQUARE RIGTH: dragMouse(${x + width}, ${y})`)

    // down
    x = getMousePos().x;
    y = getMousePos().y;
    await dragMouse(x, y - height);
    console.log(`SQUARE DOWN: dragMouse(${x}, ${y + height})`)

    // left
    x = getMousePos().x;
    y = getMousePos().y;
    await dragMouse(x - width, y);
    console.log(`SQUARE LEFT: dragMouse(${x - width}, ${y})`)

    // up
    x = getMousePos().x;
    y = getMousePos().y;
    await dragMouse(x, y + height);
    console.log(`SQUARE UP: dragMouse(${x}, ${y - height})`)
}

