import { httpServer } from './src/http_server/index';
import { WebSocketServer } from 'ws';
import operationsSwitcher from './src/ws_operations/operationsSwitcher';

const HTTP_PORT = 3000;
const WS_PORT = 8080;
const wss = new WebSocketServer({ port: WS_PORT });

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wss.on('connection', function connection(ws) {
    console.log(`Start ws server on the ${WS_PORT} port!`);

    ws.on('message', function message(data) {
        operationsSwitcher(ws, data.toString());
    });

    ws.send('something');
});

wss.on('close', () => {

})