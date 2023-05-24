const taskService = require("../services/task.services.js");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.createTask = async (req, res) => {
  try {
    const createdTask = await taskService.insertTask(req.body);
    res.status(200).json(createdTask);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { task_name } = req.body;
  try {
    const task = await taskService.updateTask(id, task_name);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};
exports.deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await taskService.deleteTask(id);
    res.status(200).send("Task has been delete");
  } catch (error) {
    next(error);
  }
};

exports.searchTask = async (req, res) => {
  const { keyword } = req.query.keyword;
  try {
    const tasks = await taskService.searchTask(keyword);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
