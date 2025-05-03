//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from 'morgan';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true}));
var userAuthorize = false;
app.use(morgan("tiny"))

function checkPassword(req, res, next) {
    const password = req.body["password"];
    if (password === "ILovePrograms") {
        userAuthorize = true;
    } else {
        userAuthorize = false;
    }
    next();
}

app.use(checkPassword);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/check", (req, res) => {
    if (userAuthorize === true) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})