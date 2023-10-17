const {
    PORT
} = require ("./config")
const server = require("./src/server")
const db = require("./src/util/db")
db.connect()
    .then(() => {
        console.log("Connected");
        server.listen(PORT, ()=> {console.log("server");})
    })
    .catch((err)=> {
        console.log("Data base not conected" + err);
    })


