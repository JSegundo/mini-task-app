import axios from 'axios';

const API_BASE_URL = 'http://localhost:3500';

export interface Task {
    id: string;
    title: string;
    createdAt: string;
}

class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getAllTasks(): Promise<Task[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/tasks`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch tasks');
        }
    }

    async createTask(title: string): Promise<Task> {
        try {
            const response = await axios.post(`${this.baseUrl}/tasks`, { title });
            return response.data;
        } catch (error) {
            throw new Error('Failed to create task');
        }
    }

    async deleteTask(id: string): Promise<void> {
        try {
            await axios.delete(`${this.baseUrl}/tasks/${id}`);
        } catch (error) {
            throw new Error('Failed to delete task');
        }
    }
}

export const apiService = new ApiService(API_BASE_URL);

