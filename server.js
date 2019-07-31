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
//var ready = [];

var lobbies = [];
for (var i = 0; i < 9999; i++) {
    lobbies.push({player1: undefined, player2: undefined});
}



function addPlayerToLobby(player, id) {
    for (var i = 0; i < 9999; i++) {
        if (id !== -1)
            i = id;


        if (!lobbies[i].player1) {
            lobbies[i].player1 = player;
            lobbies[i].player1.lobbyid = i;
            lobbies[i].player1.lobbypos = 1;
            if (lobbies[i].player2) {
                lobbies[i].player1.emit("lobbycount", {count: 2});
                lobbies[i].player2.emit("lobbycount", {count: 2});
            } else {
                lobbies[i].player1.emit("lobbycount", {count: 1});
            }

            return i;
        }
        if (!lobbies[i].player2) {
            lobbies[i].player2 = player;
            lobbies[i].player2.lobbyid = i;
            lobbies[i].player2.lobbypos = 2;
            if (lobbies[i].player1) {
                lobbies[i].player1.emit("lobbycount", {count: 2});
                lobbies[i].player2.emit("lobbycount", {count: 2});
            } else {
                lobbies[i].player2.emit("lobbycount", {count: 1});
            }
            return i;
        }
        if (id !== -1)
            break;
    }
    if (id > 7100) {
        for (var i = id; i < 9999; i++) {


            if (!lobbies[i].player1) {
                lobbies[i].player1 = player;
                lobbies[i].player1.lobbyid = i;
                lobbies[i].player1.lobbypos = 1;
                if (lobbies[i].player2) {
                    lobbies[i].player1.emit("lobbycount", {count: 2});
                    lobbies[i].player2.emit("lobbycount", {count: 2});
                } else {
                    lobbies[i].player1.emit("lobbycount", {count: 1});
                }

                return i;
            }
            if (!lobbies[i].player2) {
                lobbies[i].player2 = player;
                lobbies[i].player2.lobbyid = i;
                lobbies[i].player2.lobbypos = 2;
                if (lobbies[i].player1) {
                    lobbies[i].player1.emit("lobbycount", {count: 2});
                    lobbies[i].player2.emit("lobbycount", {count: 2});
                } else {
                    lobbies[i].player2.emit("lobbycount", {count: 1});
                }
                return i;
            }
        }
    }
    return -1;
}
function removePlayerFromLobby(player) {
    var i = player.lobbyid;
    var pos = player.lobbypos;
    var pos2 = other(pos);
    lobbies[i]["player" + pos] = undefined;
    if (lobbies[i]["player" + pos2])
        lobbies[i]["player" + pos2].emit("lobbycount", {count: 1});
}
function sendToOther(player, msg, data) {
    var i = player.lobbyid;
    var pos = player.lobbypos;
    var pos2 = other(pos);
    console.log("send to other: " + i + " " + pos + " " + pos2);
    if (lobbies[i]["player" + pos2])
        lobbies[i]["player" + pos2].emit(msg, data);
}

function other(pos) {
    return pos === 2 ? 1 : 2
}
function sendLobbyCount() {
    var res = {lobbies1: "", lobbies2: ""};
    var great = 0;
    var master = 0;
    for (var i = 0; i < 9999; i++) {
        if (lobbies[i].player1 && lobbies[i].player2) {
            res.lobbies2 += (", " + (i + 1));
            if (i > 7000 && i < 8000)
                great += 2;
            if (i > 8000)
                master += 2;
            continue;
        }
        if (lobbies[i].player1 || lobbies[i].player2) {
            res.lobbies1 += (", " + (i + 1));
            if (i > 7000 && i < 8000)
                great += 1;
            if (i > 8000)
                master += 1;
        }


        if (lobbies[i].player1 && lobbies[i].player1.ready && lobbies[i].player2 && lobbies[i].player2.ready) {
            lobbies[i]["player1"].emit('start', {});
            lobbies[i]["player2"].emit('start', {});
        }

    }
    res.lobbies1 = res.lobbies1.replace(", ", "");
    res.lobbies2 = res.lobbies2.replace(", ", "");
    io.sockets.emit('lobbycount', res);
    io.sockets.emit('playersinmodes', {great,master});
}


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

var chatlog = "";
var playernamelist = [];
// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
        // We are given a websocket object in our function
                function (socket) {
                    players++;

                    console.log("We have a new client: " + socket.id + "\nplayers: " + players);
                    socket.ready = false;
                    var lobbypos = addPlayerToLobby(socket, -1);
                    socket.emit("lobbypos", {lobbypos});
                    io.sockets.emit('playercount', {count: players});
                    sendLobbyCount();
                    socket.emit('chat', {chatlog});

                    socket.on('lobbyrequest',
                            function (data) {
                                console.log("lobbyrequest " + data.num);
                                removePlayerFromLobby(socket);
                                var newpos = addPlayerToLobby(socket, data.num);
                                console.log("try 1: " + newpos);
                                if (newpos === -1) {
                                    newpos = addPlayerToLobby(socket, -1);
                                    console.log("try 2: " + newpos);
                                }
                                socket.emit("lobbypos", {lobbypos: newpos});
                                sendLobbyCount();
                            }
                    );

                    socket.on('expecting0health',
                            function (data) {
                                //console.log("Received: " + data.move);
                                sendToOther(socket, 'expecting0health', data);
                            }
                    );
                    socket.on('dmg',
                            function (data) {
                                //console.log("Received: " + data.move);
                                sendToOther(socket, 'dmg', data);
                            }
                    );
                    socket.on('chat',
                            function (data) {
                                //console.log("Received: " + data.msg);
                                chatlog += (data.playername + ": " + data.msg + "\n").replace(/</g, "&lt").replace(/>/g, "&gt").substring(0, 200);
                                io.sockets.emit('chat', {chatlog});

                            }
                    );
                    socket.on('shield',
                            function (data) {
                                // Data comes in as whatever was sent, including objects
                                console.log("Received shield");

                                //Send it to all other clients
                                sendToOther(socket, 'shield', {});

                                // This is a way to send to everyone including sender
                                // io.sockets.emit('msg', data);

                            }
                    );
                    socket.on('switch', function (data) {
                        console.log(data.poke);
                        sendToOther(socket, 'switch', data);
                    });
                    socket.on('ready', function (data) {
                        console.log("ready: " + data.id);
                        socket.ready = true;
                        var i = socket.lobbyid;
                        var pos = socket.lobbypos;
                        var pos2 = other(pos);
                        if (lobbies[i]["player" + pos2] && lobbies[i]["player" + pos2].ready) {
                            lobbies[i]["player" + pos].emit('start', {});
                            lobbies[i]["player" + pos2].emit('start', {});
                        }

                        //io.sockets.emit('start', {});
                    });
                    //enemychangedname
                    socket.on('enemychoseteam', function (data) {
                        sendToOther(socket, 'enemychoseteam', data);
                    });
                    socket.on('enemychangedname', function (data) {
                        data.playername = data.playername.replace(/</g, "&lt").replace(/>/g, "&gt").substring(0, 15);
                        sendToOther(socket, 'enemychangedname', data);
                    });

                    socket.on('end',
                            function (data) {
                                // Data comes in as whatever was sent, including objects
                                console.log("Received end");
                                //players = 0;


                            }
                    );

                    socket.on('disconnect', function () {
                        console.log("Client has disconnected");//
                        players--;
                        if (players < 0)
                            players = 0;
                        io.sockets.emit('playercount', {count: players});
                        removePlayerFromLobby(socket);
                        sendLobbyCount();
                    });
                }
        );