import express from 'express';
import morgan from 'morgan';

const d = new Date();
const app = express();
const port = 3000;
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    const currentDay = d.getDay();
    const action = "";
    if (currentDay > 0 && currentDay < 6) {
        currentDay = "weekday";
        action = "work hard!"
    } else if (currentDay == 6 || currentDay == 0) {
        currentDay = "weekend";
        action = "have fun!"
    }
    res.render("index.ejs", { day: currentDay, action: action});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})