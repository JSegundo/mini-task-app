import { tasks, Task } from "../data/tasksStorage";

class TaskController {

    create(taskTitle: string): Task {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: taskTitle,
            createdAt: new Date()
        }

        tasks.push(newTask)
        return newTask
    }

    get(): Task[] {
        return tasks
    }

    delete(taskId: string): boolean {
        const taskIndex = tasks.findIndex(task => task.id === taskId)
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1)
            return true
        }
        return false
    }
}

export const tasksController = new TaskController()

