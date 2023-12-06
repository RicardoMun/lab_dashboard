import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        }).populate('user', ['username']);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const createTask = async (req, res) => {

    /* TODO VERIFICAR USER SCHEMA PARA RELACIONES */
    try {
        const { title, description, date, done } = req.body;
        const newTask = new Task({
            title,
            description,
            date,
            done: false,
            user: req.user.id
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user', ['username']);
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: "Task not found" });
    }
}

export const updateTask = async (req, res) => {
    try {
      const { title, description, date } = req.body;
      const taskUpdated = await Task.findOneAndUpdate(
        { _id: req.params.id },
        { title, description, date },
        { new: true }
      );
      return res.json(taskUpdated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        return res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ message: "Task not found" });
    }
}
