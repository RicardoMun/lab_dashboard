import { createContext, useContext, useState } from "react";
import {
    createTaskRequest,
    getTasksRequest,
    getTaskRequest,
    updateTaskRequest,
    deleteTaskRequest
} from "../api/tasks";


const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error("useTask debe estar dentro del proveedor TaskProvider")
    }
    return context
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        const res = await getTasksRequest();
        setTasks(res.data);
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    };

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, createTask }}>
            {children}
        </TaskContext.Provider>
    );
}