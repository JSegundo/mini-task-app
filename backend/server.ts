import express from "express"

const PORT = 3500;

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.use("/", router);

app.listen(PORT, () => {
    console.log(`server started, visit http:localhost:${PORT}`)
})