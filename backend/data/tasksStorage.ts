export interface Task {
    id: string;
    title: string
    createdAt: Date
}

export const tasks: Task[] = [{ id: "1", title: "Default task", createdAt: new Date() }];

