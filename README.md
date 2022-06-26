# Assignment: WebSockets

## Study preconditions
Task: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md
<br>Deadline: 26.06.2022 23:59
<br>Self-estimate: 164
<br>

I have no idea if it's working because of `robot.js` but I hope so:

1) Move mouse up implemented properly 
2) Move mouse down implemented properly 
3) Move mouse left implemented properly 
4) Move mouse right implemented properly 
5) Draw circle implemented properly 
6) Draw rectangle implemented properly 
7) Draw square implemented properly 

Fully implemented points:

1) Implemented workable websocket server 

2) Websocket server message handler implemented properly 

3) Websocket server message sender implemented properly 

4) Send mouse coordinates implemented properly 

5) Task implemented on Typescript 

6) All data transfer operations with send/get should be performed using Streams API 

7) Codebase is separated (at least 4 modules) 

8) Send screen image implemented properly (optionally) 


## Installation
1. Clone/download repo
2. `npm install`

## Usage
Both servers for client and backend started with one command.
If you want to change ports of any of servers please use `.env`

**Development**

`npm run start:dev`

* App served @ `http://localhost:3000` with nodemon
* WebSocket server served @ `http://localhost:8080` with nodemon

**Production**

`npm run start`

* App served @ `http://localhost:3000` without nodemon
* WebSocket server served @ `http://localhost:8080` without nodemon
