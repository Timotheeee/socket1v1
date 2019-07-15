// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

var players = 0;
var ready = [];

var io = require('socket.io')(server);

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
        // We are given a websocket object in our function
                function (socket) {
                    players++;
                    io.sockets.emit('playercount', {count: players});
                    console.log("We have a new client: " + socket.id + "\nplayers: " + players);

                    // When this user emits, client side: socket.emit('otherevent',some data);
                    socket.on('dmg',
                            function (data) {
                                // Data comes in as whatever was sent, including objects
                                console.log("Received: " + data.move);

                                //Send it to all other clients
                                socket.broadcast.emit('dmg', data);

                                // This is a way to send to everyone including sender
                                // io.sockets.emit('msg', data);

                            }
                    );
                    socket.on('shield',
                            function (data) {
                                // Data comes in as whatever was sent, including objects
                                console.log("Received shield");

                                //Send it to all other clients
                                socket.broadcast.emit('shield', {});

                                // This is a way to send to everyone including sender
                                // io.sockets.emit('msg', data);

                            }
                    );
                    socket.on('switch', function (data) {
                        console.log(data.poke);
                        socket.broadcast.emit('switch', data);
                    });
                    socket.on('ready', function (data) {
                        console.log("ready: " + data.id);
                        ready.push(data.id);
                        if (ready.length === 2)
                            io.sockets.emit('start', {});
                    });
                    socket.on('enemychoseteam', function (data) {
                        console.log("enemychoseteam: " + data.id);
                        socket.broadcast.emit('enemychoseteam', data);
                    });


                    socket.on('end',
                            function (data) {
                                // Data comes in as whatever was sent, including objects
                                console.log("Received end");
                                ready = [];
                                //players = 0;


                            }
                    );

                    socket.on('disconnect', function () {
                        console.log("Client has disconnected");//
                        players--;
                        if (players < 0)
                            players = 0;
                        io.sockets.emit('playercount', {count: players});
                        ready.remove(socket.id);
                    });
                }
        );