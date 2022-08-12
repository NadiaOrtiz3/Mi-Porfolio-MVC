const express = require("express");
const path = require("path");
const livereload = require("livereload");

const liveReloadServer = livereload.createServer();
const connectlivereload = require("connect-livereload");
const app = express();
const port = 3000;


//Rutas
const mainRouter =require("./routers/main");

// View engine setup
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("view engine",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
liveReloadServer.whatch(path.join(__dirname,"public",));
app.use(connectlivereload());

app.use("/", mainRouter);

liveReloadServer.server.once("connection",() => {
    setTimeout(() => {
        liveReloadServer.refresh("/")
    }, 50);
});
app.listen(port,() => console.log("servidor levantado en http://localhost:${port}"));