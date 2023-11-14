import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user', ['username']);
    res.json(tasks);
}

export const createTask = async (req, res) => {

    /* TODO VERIFICAR USER SCHEMA PARA RELACIONES */
    const { title, description, date, done} = req.body;
    const newTask = new Task({
        title,
        description,
        date,
        done: false,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
}

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate('user', ['username']);
    if(!task)
        return res.status(404).json({message: "Task not found"});
    res.json(task);
}

export const updateTask = async (req, res) => { 
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if(!task)
        return res.status(404).json({message: "Task not found"});
    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task)
        return res.status(404).json({message: "Task not found"});
    return res.sendStatus(204);
}
