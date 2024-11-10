const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
connectDB();

app.use(bodyParser.json());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
