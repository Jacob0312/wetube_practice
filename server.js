import express from "express";
import globalRouter from "./routers/globalRouter.js";

const PORT = 4000;

const app = express();

function handleAnother(req, res, send) {
	res.send("Hello! Another");
}
app.get("/", (req, res) => {
	return res.send("Hello!");
});

app.use("/hello", globalRouter);

app.use("/another", handleAnother);

const handleListening = () =>
	console.log(`Server listening on http://localhost:${PORT}`);

app.listen(4000, handleListening);
