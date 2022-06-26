import { WebSocket } from 'ws';
import { moveMouseUp, moveMouseDown, moveMouseLeft, moveMouseRight } from './mouseOperations';
import mouseCoord from './mouseCoord'

enum Operations {
    MOUSE_UP = 'mouse_up',
    MOUSE_DOWN = 'mouse_down',
    MOUSE_RIGHT = 'mouse_right',
    MOUSE_LEFT = 'mouse_left',
    MOUSE_POSITION = 'mouse_position'
}

// r
// p
// a
// up
// down
// left
// right

const operationsSwitcher = (ws: WebSocket, command: string) => {
    const args = command.split(' ');
    const commandName = args[0];
    const commandParam = Number(args[1]);

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
        default:
            console.log('Unknown operation');
    }

    console.log(command);
}

export default operationsSwitcher;
