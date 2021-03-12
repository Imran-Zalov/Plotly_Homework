const express = require("express");
const app = express();
const importData = require("./samples.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/samples", (req, res) => {
	res.send(importData);
})

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:$(port)`);
});