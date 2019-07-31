$(function () {

    function updateChat() {
        $("#chatcontainer textarea").html(chatlog);
        var textarea = document.getElementById('chatbox');
        textarea.scrollTop = textarea.scrollHeight;
    }
    $("#chatbtn").click(function () {
        //                if (playername === "") {
        //                    playername = "anonymous" + Math.floor(Math.random() * 999);
        //                    $("#name2").html(playername);
        //                }

        var msg = $("#chatinput").val();
        socket.emit("chat", {msg, playername});

        $("#chatinput").val("");
    });
    socket.on("chat", function (data) {
        chatlog = data.chatlog;
        updateChat();
    });
    $("#chatinput").keypress(function (event) {
        //console.log(event.which);
        if (event.which === 13) {
            event.preventDefault();
            console.log("enter");
            $("#chatbtn").click();
        }
    });
});