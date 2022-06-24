import { WebSocket } from 'ws';

// r
// p
// a
// up
// down
// left
// right

const operationsSwitcher = (ws: WebSocket, command: string) => {
    console.log(command);
    ws.send(command);
}

export default operationsSwitcher;
