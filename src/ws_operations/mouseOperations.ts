import { moveMouseSmooth } from 'robotjs';

const mouseCoord = () => {
    console.log('!!!!!!!!!!!')
    //robot.moveMouse(100, 100);
}

export const moveMouseUp = (commandParam: number) => {
    moveMouseSmooth(0, commandParam);
    console.log(`moveMouseSmooth(0, ${commandParam});`);
}

export const moveMouseDown = (commandParam: number) => {
    moveMouseSmooth(0, -commandParam);
    console.log(`moveMouseSmooth(0, ${-commandParam});`);
}

export const moveMouseLeft = (commandParam: number) => {
    moveMouseSmooth(-commandParam, 0);
    console.log(`moveMouseSmooth(${-commandParam}, 0);`);
}

export const moveMouseRight = (commandParam: number) => {
    moveMouseSmooth(commandParam, 0);
    console.log(`moveMouseSmooth(${commandParam}, 0);`);
}
