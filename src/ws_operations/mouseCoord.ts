import { WebSocket } from 'ws';
import { getMousePos } from 'robotjs';

const mouseCoord = (ws: WebSocket) => {
    const { x, y } = getMousePos();
    console.log("Mouse is at x:" + x + " y:" + y);
    ws.send(`mouse_position ${x},${y}\0`);
}

export default mouseCoord;
