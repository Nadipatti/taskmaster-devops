const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to TaskMaster DevOps App");
});

app.get("/tasks", (req, res) => {
    res.json([
        {id:1, task:"Learn DevOps"},
        {id:2, task:"Deploy to Cloud"}
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});