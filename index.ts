import dotenv from 'dotenv';
import { httpServer } from './src/http_server/index';
import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import operationsSwitcher from './src/ws_operations/operationsSwitcher';

interface WSExtended extends WebSocket {
    isAlive?: boolean;
}

const config = dotenv.config()
const HTTP_PORT = Number(config.parsed && config.parsed.HTTP_PORT) || 3000;
const WS_PORT = Number(config.parsed && config.parsed.WS_PORT) || 8080;
const wss = new WebSocketServer({ port: WS_PORT });

console.log(`Start static http server on the ${HTTP_PORT} port!`);
console.log(`WebSocket server will be run on the port: ${WS_PORT}`)
httpServer.listen(HTTP_PORT);

wss.on('connection', function connection(ws: WSExtended) {
    const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
    console.log(`Start ws server on the ${WS_PORT} port!`);
    ws.isAlive = true;

    duplex.on('data', data => {
        operationsSwitcher(ws, data.toString());
    })

    ws.on('pong', () => {
        ws.isAlive = true;
    });

    wss.close();
});

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws: WSExtended) {
        if (!ws.isAlive ) return ws.terminate();

        ws.isAlive = false;
        ws.ping();
    });
}, 3000);

wss.on('close', function close() {
    clearInterval(interval);
    console.log('WebSocket Server closed');
});