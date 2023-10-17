const {
    PORT
} = require ("./config")
const server = require("./src/server")

server.listen(PORT, ()=> {console.log("server");})