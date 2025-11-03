import express from "express"
import cors from "cors"
import { tasksController } from "./controller/tasksController";
import { Task } from "./data/tasksStorage";

const PORT = 3500;
const app = express();
const router = express.Router();

app.use(express.json())
app.use(cors())

router.get("/tasks", (req, res) => {
    try {
        const tasks = tasksController.get()
        return res.json(tasks)
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch tasks" })
    }
})

router.post("/tasks", (req, res) => {
    try {
        const title = req.body?.title
        if (!title || typeof title !== 'string' || title.trim().length === 0) {
            return res.status(400).json({ error: "Title is required" })
        }
        const newTask = tasksController.create(title.trim())
        return res.status(201).json(newTask)
    } catch (error) {
        return res.status(500).json({ error: "Failed to create task" })
    }
})

router.delete("/tasks/:id", (req, res) => {
    try {
        const deleted = tasksController.delete(req.params.id)
        if (deleted) {
            return res.status(200).json({ message: "Task deleted" })
        }
        return res.status(404).json({ error: "Task not found" })
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete task" })
    }
})


app.use("/", router);

app.listen(PORT, () => {
    console.log(`server started, visit http:localhost:${PORT}`)
})