const Websocket = require("ws");


const server = new Websocket.Server({port:3030},() => {
    console.log("Server is running")
});
// handshake server == client client -> server zapros server -> client === http
// websocket = client == server -> client serverdan so'rab turadi
server.on("connection",(ws) => {
    ws.on("message",(message) => {
        if(message == "exit") {
            ws.close()
        } else {
            server.clients.forEach((client)=>{
                if(client.readyState == Websocket.OPEN){
                    client.send(message.toString())
                }
            })
        }
    })
    ws.send("Welcome to chat")

});

