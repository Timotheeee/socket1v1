$(function () {



    if (window.location.href.includes("heroku")) {
        socket = io.connect(window.location.href.replace("http", "ws"));
    } else {
        socket = io.connect('http://178.82.224.106:3000/');
    }


    console.log(socket);


    function initteam(teamdata) {
        var team2 = [];
        team2.push(JSON.parse(JSON.stringify(teamdata))[0]);
        team2.push(JSON.parse(JSON.stringify(teamdata))[1]);
        team2.push(JSON.parse(JSON.stringify(teamdata))[2]);
        //console.log(team2[0]);
        for (var i = 0; i < 3; i++) {
            if (!team2[i].cinematicMove2)
                team2[i].cinematicMove2 = team2[i].cinematicMove;
            team2[i].name = team2[i].pokemon.replace("_FORM", "").replace("ALOLA", "ALOLAN");
            var p = gm.getPokemonById(team2[i].name.toLowerCase());
            var cpm = cpms[(team2[i].level - 1) * 2];
            var cmove1 = gm.getMoveById(team2[i].cinematicMove);
            var cmove2 = gm.getMoveById(team2[i].cinematicMove2);
            //if(cmove2===undefined)cmove2=JSON.parse(JSON.stringify(cmove1));//for things with 1 charge move

            team2[i].hp = Math.floor((p.baseStats.hp + team2[i].individualStamina) * cpm);
            team2[i].maxhp = team2[i].hp;
            team2[i].atk = (p.baseStats.atk + team2[i].individualAttack) * cpm;
            team2[i].def = (p.baseStats.def + team2[i].individualDefense) * cpm;
            team2[i].energy = 0;
            team2[i].req1 = cmove1.energy;
            team2[i].req2 = cmove2.energy;
            team2[i].ctype1 = cmove1.type;
            team2[i].ctype2 = cmove2.type;
            team2[i].quickMoveDelay = (gm.getMoveById(team2[i].quickMove.replace("_FAST", "")).cooldown) / 500;
            team2[i].atkboosts = 0;
            team2[i].defboosts = 0;
            team2[i].cmove1 = cmove1;
            team2[i].cmove2 = cmove2;
            team2[i].cp = calcCP(p.speciesId, team2[i].level, team2[i].individualAttack, team2[i].individualDefense, team2[i].individualStamina);
        }
        return team2;
    }

    setTimeout(function () {
        team = initteam(defaultbox.pokemon);
        enemyteam = initteam(defaultbox.pokemon);
    }, 1);

    socket.on('lobbypos', function (data) {
        $("#lobbynumber").text(data.lobbypos + 1);
    });
    socket.on('lobbycount', function (data) {
        $("#lobbies1").text(data.lobbies1 === "" ? "none" : data.lobbies1);
        $("#lobbies2").text(data.lobbies2 === "" ? "none" : data.lobbies2);
    });
    socket.on('lobbycount', function (data) {
        if (data.count === 1 && startrecv) {
            display("the enemy disconnected, " + refreshbtn);
            socket.disconnect();
            started = false;
        }
        $("#playercountinlobby").text(data.count);
    });

    socket.on('dmg',
            function (data) {
                if (!started)
                    return;
                //console.log("Got: " + data.move);
                //console.log(data);
                var dmg = convertToDamage(data.move, false);
                var energyused = convertToEnergy(data.move);
                //console.log(data.health[currentpoke] - dmg);
                var enemyExpectsUsToDie = data.health[currentpoke] - dmg <= 0;
                if (enemyExpectsUsToDie) {
                    console.log("enemy expects us to die");
                }
                chargeincoming = false;
                if (energyused < 0) {
                    chargeincoming = true;
                    var btn = "<button class='shieldbtn'>shield</button>";
                    setTimeout(function () {
                        $(".shieldbtn").fadeOut(0);
                    }, 2700);
                    display2("charge move incoming!" + (shields > 0 ? btn : ""));
                }
                setTimeout(function () {
                    if (!chargeincoming)
                        animate(1);
                    team[currentpoke].hp -= shielding ? 1 : dmg;


                    updateHP();
                    var movedata = gm.getMoveById(data.move);

                    //acid spray
                    //console.log(movedata);
                    if (movedata.buffApplyChance && movedata.buffApplyChance === 1) {
                        //console.log(movedata);
                        if (movedata.buffTarget === "opponent") {
                            team[currentpoke].atkboosts += movedata.buffs[0];
                            team[currentpoke].defboosts += movedata.buffs[1];
                        } else {
                            enemyteam[currentenemypoke].atkboosts += movedata.buffs[0];
                            enemyteam[currentenemypoke].defboosts += movedata.buffs[1];
                        }
                        limitboosts();
                    }

                    if (chargeincoming) {
                        //display("the charge move was " + data.move.toLowerCase().replace("_", " "));
                        display2("the charge move was " + data.move.toLowerCase().replace("_", " ").replace("_", " "));
                        setTimeout(function () {
                            if ($("#win2").html().includes("the charge move was "))
                                display2("");
                        }, 1500);
                    }

                    setTimeout(function () {
                        if ($("#win").html().includes("the charge move was "))
                            display("")
                    }, 1500);
                    shielding = false;
                    chargeincoming = false;
                }, chargeincoming ? 3500 : 0);


            }
    );

    socket.on('shield', function (data) {
        if (oshields === 0)
            return;
        opponentshielding = true;
        display("opponent shielded");
        oshields--;
    });
    socket.on('switch', function (data) {
        //console.log("switch");
        //console.log(data);
        currentenemypoke = data.id;
        updateMoveButtons();
        if ($("#win").html().includes("the opponent is choosing their next pokemon!"))
            display("");
    });
    socket.on('playercount', function (data) {
        $("#playercount").text(data.count);
    });
    socket.on('enemychoseteam', function (data2) {
        //console.log(data2);
        enemyteam = data2;
    });
    socket.on('enemychangedname', function (data2) {
        enemyname = data2.playername;
    });

    //switch or use a move

    setInterval(function () {
        if (Date.now() - afktimer > 60000 && started) {
            socket.disconnect();
            display("you have been disconnected for inactivity");
            return;
        }
        if (move === "" || doingcharge || chargeincoming || winner >= 0)
            return;
        if (move.includes("switch")) {
            if (team[currentpoke].hp > 0)
                switchcd = 30;
            currentpoke = parseInt(move.split("_")[1]);
            updateMoveButtons();
            move = currentQuickMove();
            socket.emit('switch', {id: currentpoke});
            turnswaited = 0;
            if ($("#win").html().includes("choose your next pokemon!"))
                display("");
        }
        if (team[currentpoke].hp < 1) {
            switchcd = 0;
            display("choose your next pokemon!");
            return;
        }
        if (enemyteam[currentenemypoke].hp < 1) {
            display("the opponent is choosing their next pokemon!");
            return;
        }

        //using the move
        /*
         * case 1: quick move
         * case 2: not enough energy
         * case 3: enough energy
         * case 4: we have enough energy with 1 more quick move (undertap)
         **/

        var quickmovedelta = convertToEnergy(currentQuickMove());
        var movedelta = -1 * convertToEnergy(move);
        var nextenergy = team[currentpoke].energy + quickmovedelta;
        //                var nextenergy2 = team[currentpoke].energy + quickmovedelta*2;
        var undertap = nextenergy >= movedelta && move !== currentQuickMove();
        var nextcharge = move;

        doingcharge = true;
        if (move === currentQuickMove()) {
            doingcharge = false;
            //console.log("case1");
            turnswaited++;
            if (currentQuickMoveDelay() > turnswaited)
                return;
            turnswaited = 0;


        } else if (nextenergy < movedelta) {
            doingcharge = false;
            //console.log("case2");
            move = currentQuickMove();
            turnswaited++;
            if (currentQuickMoveDelay() > turnswaited)
                return;
            turnswaited = 0;


        } else if (team[currentpoke].energy >= movedelta) {
            //console.log("case3 " + movedelta + " " + team[currentpoke].energy);
            //no problem

        } else if (undertap) {
            doingcharge = false;
            //console.log("case4 undertap");
            move = currentQuickMove();
            turnswaited++;
            if (currentQuickMoveDelay() > turnswaited)
                return;
            turnswaited = 0;
        } else {
            console.log("wtf");
        }

        movedelta *= -1;
        //console.log(team[currentpoke].energy);
        //console.log(move);



        socket.emit('dmg', {move, health: [enemyteam[0].hp, enemyteam[1].hp, enemyteam[2].hp]});
        if (doingcharge) {
            display("waiting for opponent to shield");
        }


        if (!doingcharge)
            lock = true;
        setTimeout(function () {
            lock = false;
            //                    if (!doingcharge)
            //                        ;
            animate(2);
            //console.log(team[currentpoke].atkboosts);
            enemyteam[currentenemypoke].hp -= (opponentshielding ? 1 : convertToDamage(move, true));
            if ($("#win").html().includes("opponent shielded") || $("#win").html().includes("waiting for opponent to shield"))
                display("");
            team[currentpoke].energy += convertToEnergy(move);
            team[currentpoke].energy = team[currentpoke].energy > 100 ? 100 : team[currentpoke].energy;

            var movedata = gm.getMoveById(move);

            if (movedata.buffApplyChance && movedata.buffApplyChance === 1) {
                //console.log(movedata);
                if (movedata.buffTarget === "self") {
                    team[currentpoke].atkboosts += movedata.buffs[0];
                    team[currentpoke].defboosts += movedata.buffs[1];
                } else {
                    enemyteam[currentenemypoke].atkboosts += movedata.buffs[0];
                    enemyteam[currentenemypoke].defboosts += movedata.buffs[1];
                }
                limitboosts();
            }

            updateHP();
            updateEn();
            //console.log(move);

            opponentshielding = false;
            //console.log(undertap);
            move = undertap ? nextcharge : currentQuickMove();
            if (doingcharge)
                move = currentQuickMove();
            doingcharge = false;

            if (enemyteam[currentenemypoke].hp <= 0)
                socket.emit("expecting0health", {expectedteam: enemyteam});
        }, doingcharge ? 3500 : 0);


    }, 500);
    socket.on('expecting0health', function (data) {
        if (team[currentpoke].hp > 0) {
            var e0 = team[0].energy;
            var e1 = team[1].energy;
            var e2 = team[2].energy;
            team = data.expectedteam;
            team[0].energy = e0;
            team[1].energy = e1;
            team[2].energy = e2;
        }

    });


    socket.on('start', function (data) {

        console.log("received start");
        if (startrecv)
            return;

        afktimer = Date.now();
        startrecv = true;
        setTimeout(function () {
            display("3");
            new Audio('alert.wav').play();
            var id = $("#pokebattlerid").val();
            socket.emit('enemychoseteam', team);
            socket.emit('enemychangedname', {playername});
        }, 0);
        setTimeout(function () {
            display("2")
        }, 1000);
        setTimeout(function () {
            display("1");
            //failsafe
            updateMoveButtons();
            updateSwitchButtons();
        }, 2000);
        setTimeout(function () {
            display("");
            move = currentQuickMove();
            started = true;
        }, 3000);
    });






    $("html").on("click", "*", function () {
        afktimer = Date.now();
    });





    //------------------------------------------------------------------------------------------------------------
    //INTERFACE STUFF

    //failsafe for some wierd mobile bug
    setTimeout(function () {
        $("#team div").eq(0).click();
        $("#team div").eq(0).click();
    }, 200);



    $('#ready').click(function () {
        if (teamFitsInGreat)
            joinGameMode(7199);
    });
    $('#ready2').click(function () {
        joinGameMode(8099);
    });
    function joinGameMode(lobby) {
        if (!changedlobby) {
            socket.emit('lobbyrequest', {num: lobby});
            display("waiting for opponent");
            $("#ready").fadeOut(0);
            $("#ready2").fadeOut(0);
            $("#lobbynumbercontainer").fadeOut(0);
            $("#changelobbycontainer").fadeOut(0);
            $("#tutorial").fadeOut(0);
        }
        socket.emit('ready', {id: socket.id});
    }

    $("#team").on("click", "div", function () {
        if (startrecv)
            return;
        if ($(this).attr("id") === "newpoke") {
            new modalWindow("add new pokemon", $(".addpoke"));
        } else {
            selectedNewTeam(this);
        }

    });

    function calcBoxCP(poke) {
        var name = poke.pokemon.replace("_FORM", "").toLowerCase().replace("-", "_").replace("ALOLA", "ALOLAN");
        return calcCP(name, poke.level, poke.individualAttack, poke.individualDefense, poke.individualStamina);
    }
    if (localStorage.id && localStorage.id !== "") {
        $("#pokebattlerid").val(localStorage.id);
        setTimeout(function () {
            $("#loadteam").click();
        }, 0);
    }
    $("#loadteam").click(function () {
        if (started)
            return;
        var id = Number.parseInt($("#pokebattlerid").val());
        if ($("#pokebattlerid").val() === "") {
            pokebox = defaultbox.pokemon;
            team = initteam(pokebox);
            updateTeamSelector(defaultbox);
            updateMoveButtons();
            updateSwitchButtons();
            localStorage.id = "";
            localStorage.removeItem("pokebox");
        }
        if (isNaN(id))
            return;
        localStorage.id = id;
        $.get("https://fight.pokebattler.com/profiles/" + id, {}, function (data) {
            try {
                //console.log(data);
                //teamdata = data;
                pokebox = data.pokemon;
                localStorage.pokebox = JSON.stringify(pokebox);
                team = initteam(pokebox);
                updateTeamSelector(data);
                updateMoveButtons();
                updateSwitchButtons();
                //console.log(data.trainer.name);
                if (data.trainer.name !== null) {
                    playername = data.trainer.name;

                }

            } catch (e) {
                $("#pokebattlerinfo").text("an error occured. make sure your first battle party has the 3 pokemon you want to use and " + refreshbtn);
                console.log(e.message);
            }
        });
        updateMoveButtons();
        updateSwitchButtons();
    });


    updateTeamSelector({"pokemon": pokebox});
    function updateTeamSelector(data) {
        //console.log(data.pokemon);
        $("#team").html("");
        var toappend = "";
        for (var i = 0; i < data.pokemon.length; i++) {
            try {
                var selected = "class='";
                if (localStorage.selected) {
                    var s = JSON.parse(localStorage.selected);
                    selected += (i === s[0] || i === s[1] || i === s[2]) ? "selectedpoke" + (i === s[0] ? " lead" : "") : "";
                    selected += "'";
                } else {
                    selected = i < 3 ? "class='selectedpoke'" : "";
                    selected = i < 1 ? "class='selectedpoke lead'" : selected;
                }
                var cur = data.pokemon[i];
                //console.log(cur.pokemon);
                var name = cur.pokemon.replace("_FORM", "").toLowerCase().replace("_", "-").replace("_", "-");
                var name2 = name.replace("_FORM", "").replace("ALOLA", "ALOLAN").replace("-", "_");
                var movedisplay = cur.quickMove.substring(0, 2) + "," + cur.cinematicMove.substring(0, 2) + "," + cur.cinematicMove2.substring(0, 2);

                var cp = calcCP(name2, cur.level, cur.individualAttack, cur.individualDefense, cur.individualStamina);
                //console.log("using calcp with : " + name2 + " " + cur.level + " " + cur.individualAttack + " " + cur.individualDefense + " " + cur.individualStamina + " " + cp);
                toappend += "<div " + selected + " data-name='" + name + "' data-id='" + i + "' style='background-image: url(" + showdownURL(data.pokemon[i].pokemon) + ")'>" + cp + " " + movedisplay + "</div>";
                //console.log(toappend);
                //

            } catch (e) {
                console.log(e);
            }
        }
        toappend += "<div id='newpoke'><span style='opacity:0'>a</span><span style='position:absolute;top:20px;left:35px;font-size:50px;'>+</span></div>"
        $("#team").append(toappend);
        selectedNewTeam();
    }
    function selectedNewTeam(this2) {
        teamFitsInGreat = true;
        //console.log($(this));
        var len = $(".selectedpoke").length;
        $(this2).removeClass("lead");
        if ($(".lead").length === 0 && !$(this2).hasClass("selectedpoke"))
            $(this2).addClass("lead");
        $(this2).toggleClass("selectedpoke");
        len = $(".selectedpoke").length;
        //console.log(len);
        if (len === 3) {
            var party = [];
            var storage = [];
            var id = $(".lead").data("id");
            if ($(".lead").length === 1) {
                party.push(pokebox[id]);
                if (calcBoxCP(pokebox[id]) > 1501)
                    teamFitsInGreat = false;
                storage.push(id);
            }

            var leadid = id;
            for (var i = 0; i < 3; i++) {
                id = $(".selectedpoke").eq(i).data("id");
                //console.log(calcBoxCP(pokebox[id]));
                if (id === leadid)
                    continue;
                //console.log(id);
                party.push(pokebox[id]);
                storage.push(id);

                if (calcBoxCP(pokebox[id]) > 1501)
                    teamFitsInGreat = false;
            }
            //console.log(party);
            team = initteam(party);
            updateSwitchButtons();
            updateMoveButtons();
            localStorage.selected = JSON.stringify(storage);
        }
    }




    $('body').on("click", "#chargemove1container", function (e) {
        if (!started || lock)
            return;
        move = team[currentpoke].cinematicMove;
    });
    $('body').on("click", "#chargemove2container", function (e) {
        if (!started || lock)
            return;
        move = team[currentpoke].cinematicMove2;
    });
    $('body').on("click", ".shieldbtn", function (e) {
        shields--;
        shielding = true;
        socket.emit('shield', {});
        $(this).hide();
    });
    $('body').on("click", "#switch button", function (e) {
        var at = $(this).attr("name");
        //console.log(currentpoke);
        //console.log(at);
        if (!doingcharge && currentpoke != at)
            move = "switch_" + at;
    });
    var changedlobby = false;
    $("#changelobbybtn").click(function () {
        var n = Number.parseInt($("#lobbyinput").val());
        if (!isNaN(n) && n > 0 && n < 1000) {
            if (started)
                return;
            changedlobby = true;
            //                    $("#ready strong").text("ready");
            socket.emit('lobbyrequest', {num: (n - 1)});
            $("#ready").click();
            $("#ready").fadeOut(0);
            $("#ready2").fadeOut(0);
            display("waiting for opponent");
        }


    });


    setInterval(function () {

        cd.text(switchcd);
        shieldcount2.text(shields);
        shieldcount1.text(oshields);
        name2.html(playername);
        name1.html(enemyname);
        //question.PNG
        if (started) {
            img1.css("background-image", "url(" + showdownURL(enemyteam[currentenemypoke].name) + ")");
        } else {
            img1.css("background-image", "url(question.PNG)");
        }
        img2.css("background-image", "url(" + showdownURL(team[currentpoke].name) + ")");

        for (var i = 0; i < 3; i++) {
            if (enemyteam[i].hp < 1)
                $(".enemypoke").eq(i).addClass("KOpoke");
        }
        var r = $("#ready");
        r.removeClass("button-green");
        r.removeClass("button-red");
        r.addClass(teamFitsInGreat ? "button-green" : "button-red");

        disableSwitchButton(team[currentpoke].name);
        updateHP();
        updateEn();
        if (winner >= 0) {
            if (!sentendpacket) {
                sentendpacket = true;
                socket.emit('end', {});
                var share = "<br>If you like the simulator, share it with your friends to increase the playerbase";
                display(winner === 1 ? "you win. " + refreshbtn + share : "you lose. " + refreshbtn + share);
            }

            //socket.disconnect();
        }
        if (started)
            $("#enemycp").html(enemyteam[currentenemypoke].cp + " CP");
    }, 50);

    function display(text) {
        if (!win1.html().includes("enemy disconnected"))
            win1.html(text);
    }
    function display2(text) {
        win2.html(text);
    }

    function disableSwitchButton(poke) {

        for (var i = 0; i < 3; i++) {
            $("button[name='" + i + "']").attr("disabled", team[i].hp < 1);
        }
        $("button[name='" + poke + "']").attr("disabled", true);
        if (!(switchcd === 0 && started))
            $("#switch button").attr("disabled", true);
    }
    function updateSwitchButtons() {
        for (var i = 0; i < 3; i++) {
            $("#switch" + (i + 1)).css("background-image", "url(" + showdownURL(team[i].name) + ")");
        }
    }
    setInterval(function () {
        switchcd--;
        if (switchcd < 0)
            switchcd = 0;
    }, 1000);

    function updateHP() {
        //                if (winner >= 0) {
        //                    display(winner === 1 ? "you win" : "you lose");
        //                    return;
        //                }
        if (team[0].hp < 1 && team[1].hp < 1 && team[2].hp < 1)
            winner = 0;
        if (enemyteam[0].hp < 1 && enemyteam[1].hp < 1 && enemyteam[2].hp < 1)
            winner = 1;


        var w1 = Math.floor((team[currentpoke].hp / team[currentpoke].maxhp) * 200);
        var w2 = Math.floor((enemyteam[currentenemypoke].hp / enemyteam[currentenemypoke].maxhp) * 200);
        $("#hp2").css({width: (w1)});
        $("#hp1").css({width: (w2)});
        $("#hp1").css({"background-color": (w2 < 100 ? (w2 < 20 ? ("red") : "yellow") : "#66ff66")});
        $("#hp2").css({"background-color": (w1 < 100 ? (w1 < 20 ? ("red") : "yellow") : "#66ff66")});

    }
    function updateEn() {
        //$("#enin").css({width: (team[currentpoke].energy)});
        //console.log(team[currentpoke].energy);
        $("#move1progress").css({height: (80 * team[currentpoke].energy / team[currentpoke].req1)});
        $("#move2progress").css({height: (80 * team[currentpoke].energy / team[currentpoke].req2)});
        if (team[currentpoke].energy >= team[currentpoke].req1) {
            $("#chargemove1btn").addClass("active")
        } else {
            $("#chargemove1btn").removeClass("active")
        }
        if (team[currentpoke].energy >= team[currentpoke].req2) {
            $("#chargemove2btn").addClass("active")
        } else {
            $("#chargemove2btn").removeClass("active")
        }

    }
    function updateMoveButtons() {
        //console.log(enemyteam);
        // console.log(startrecv);
        var q = currentQuickMove();
        var q2 = "unknown";
        if (enemyteam)
            if (startrecv)
                q2 = enemyteam[currentenemypoke].quickMove.replace("_FAST", "");

        var c1 = team[currentpoke].cinematicMove;
        var c2 = team[currentpoke].cinematicMove2;
        $("#quickmovebtn").text(q.toLowerCase().replace("_", " ").replace("_", " "));
        $("#enemyquickmovebtn").text(q2.toLowerCase().replace("_", " ").replace("_", " "));
        $("#chargemove1btn").data("name", c1);
        $("#chargemove1text").text(c1.toLowerCase().replace("_", " ").replace("_", " "));
        $("#chargemove2btn").data("name", c2);
        $("#chargemove2text").text(c2.toLowerCase().replace("_", " ").replace("_", " "));

        //console.log(team[currentpoke].ctype1);
        for (var i = 1; i < 3; i++) {
            $("#chargemove" + i + "btn").attr("class", "movebtn noselect " + team[currentpoke]["ctype" + i + ""]);
            $("#move" + i + "background").attr("class", team[currentpoke]["ctype" + i + ""]);
        }



        updateEn();
    }
    function currentQuickMove() {
        return team[currentpoke].quickMove.replace("_FAST", "");
    }
    function currentQuickMoveDelay() {
        return team[currentpoke].quickMoveDelay;
    }


    function showdownURL(url) {
        var t = url.replace("_FORM", "").toLowerCase().replace("_", "-").replace("_", "-").replace("alolan", "alola");
        return "./sprites/" + t + "/" + t + ".png";
    }
    function animate(n) {
        if (n === 1)
            $("#img1").animate({top: "-40px", left: "10px"}, 240, "linear", function () {
                $("#img1").animate({top: "-50px", left: "0px"}, 240, "linear");
            });
        if (n === 2)
            $("#img2").animate({top: "40px", left: "410px"}, 240, "linear", function () {
                $("#img2").animate({top: "50px", left: "420px"}, 240, "linear");
            });
    }


    $("#namebtn").click(function () {

        playername = $("#nameinput").val();
        localStorage.name = playername;
    });
    function getNewPoke() {
        var cinematicMove = $(".modal .move-select.charged").eq(0).val();
        var cinematicMove2 = $(".modal .move-select.charged").eq(1).val();
        var quickMove = $(".modal .move-select.fast").eq(0).val();
        var individualAttack = Number.parseInt($(".modal .iv[iv='atk']").val());
        var individualDefense = Number.parseInt($(".modal .iv[iv='def']").val());
        var individualStamina = Number.parseInt($(".modal .iv[iv='hp']").val());
        var level = Number.parseFloat($(".modal .level").val());
        var pokemon = $(".modal .poke-select").val();
        console.log(pokemon);
        return {cinematicMove, cinematicMove2, quickMove, individualAttack, individualDefense, individualStamina, level, pokemon};
    }
    $("html").on("click", "#addpokebtn", (function () {



        pokebox.push(getNewPoke());
        localStorage.pokebox = JSON.stringify(pokebox);
        updateTeamSelector({pokemon: pokebox});
        closeModalWindow();
    }));
    $("html").on("click", ".master-stats", (function () {
        $(".level").val("40");
        updateNewCP();
    }));
    $("html").on("click", ".ultra-stats", (function () {
        var s = $(".modal .poke-select").val();
        $(".level").val(maxTradeLevel(s)[1]);
        updateNewCP();
    }));
    $("html").on("click", ".great-stats", (function () {
        var s = $(".modal .poke-select").val();
        $(".level").val(maxTradeLevel(s)[0]);
        updateNewCP();
    }));
    $("html").on("keyup", ".poke-search", function (e) {
        var searchStr = $(this).val().toLowerCase();
        //console.log(searchStr);
        if (searchStr == '')
            return;

        var pokename = gm.getPokemonById(searchStr).speciesId;
        $(".poke-select option").each(function () {
            var v = $(this).val();
            $(this).removeAttr("selected");
//                   console.log(pokename + " " + v);
            if (v === pokename) {
                $(this).attr("selected", "");
            }

        });
        pokeSelectChanged(pokename);
        updateNewCP();
    });
    $("html").on("change", ".poke-select", function (e) {
        var selectedpoke = $(this).val();
        $(".poke-search").val(selectedpoke);
        pokeSelectChanged(selectedpoke);
    });
    $("html").on("change", ".modal *", function (e) {
        //console.log("change");
        updateNewCP();
    });
    function updateNewCP() {
        var p = getNewPoke();
        var cp = calcCP(p.pokemon, p.level, p.individualAttack, p.individualDefense, p.individualStamina);
        $(".cp .stat").html(cp);
    }
    function pokeSelectChanged(poke) {
        //console.log(poke);
        var pokegm = gm.getPokemonById(poke);

        var fastmoves = "";
        for (var i = 0; i < pokegm.fastMoves.length; i++) {
            var m = pokegm.fastMoves[i];
            var m2 = m.toLowerCase().replace("_", " ");
            var selected = i === 0 ? "selected" : "";
            fastmoves += "<option " + selected + "  value='" + m + "'>" + m2 + "</option>"
        }
        //console.log(fastmoves);
        $(".move-select.fast").html(fastmoves);

        var chargemoves = "";
        for (var i = 0; i < pokegm.chargedMoves.length; i++) {
            var m = pokegm.chargedMoves[i];
            var m2 = m.toLowerCase().replace("_", " ");
            var selected = i === 1 ? "selected" : "";
            chargemoves += "<option " + selected + " value='" + m + "'>" + m2 + "</option>"
        }
        $(".move-select.charged").html(chargemoves);

    }
    function clearSelected() {
        $("#team div").removeClass("selectedpoke");
        $("#team div").removeClass("lead");
    }
    socket.on("playersinmodes",function(data){
        $("#playersgreat").html(data.great);
        $("#playersmaster").html(data.master);
    });
});