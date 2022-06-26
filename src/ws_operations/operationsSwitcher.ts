import { WebSocket } from 'ws';
import { moveMouseUp, moveMouseDown, moveMouseLeft, moveMouseRight } from './mouseOperations';
import { drawCircle, drawRectangle } from './drawingOperations';
import mouseCoord from './mouseCoord'

enum Operations {
    MOUSE_UP = 'mouse_up',
    MOUSE_DOWN = 'mouse_down',
    MOUSE_RIGHT = 'mouse_right',
    MOUSE_LEFT = 'mouse_left',
    MOUSE_POSITION = 'mouse_position',
    DRAW_CIRCLE = 'draw_circle',
    DRAW_SQUARE = 'draw_square',
    DRAW_RECTANGLE = 'draw_rectangle'
}

const operationsSwitcher = (ws: WebSocket, command: string) => {
    const args = command.split(' ');
    const commandName = args[0];
    const commandParam = Number(args[1]);
    const rectangleLength = Number(args[2] ? args[2] : 0);

    switch (commandName) {
        case Operations.MOUSE_UP:
            moveMouseUp(commandParam);
            ws.send(commandName + '\0');
            break;
        case Operations.MOUSE_DOWN:
            moveMouseDown(commandParam);
            ws.send(commandName + '\0');
            break;
        case Operations.MOUSE_LEFT:
            moveMouseLeft(commandParam);
            ws.send(commandName + '\0');
            break;
        case Operations.MOUSE_RIGHT:
            moveMouseRight(commandParam);
            ws.send(commandName + '\0');
            break;
        case Operations.MOUSE_POSITION:
            mouseCoord(ws);
            break;
        case Operations.DRAW_CIRCLE:
            drawCircle(commandParam);
            ws.send(commandName + '\0');
            break;
        case Operations.DRAW_SQUARE:
            drawRectangle(commandParam, commandParam);
            ws.send(commandName + '\0');
            break;
        case Operations.DRAW_RECTANGLE:
            drawRectangle(commandParam, rectangleLength);
            ws.send(commandName + '\0');
            break;
        default:
            console.log('Unknown operation');
    }

    console.log(command);
}

export default operationsSwitcher;
