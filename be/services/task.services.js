const Task = require("../models/task.js");

exports.getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    return task;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.insertTask = async (data) => {
  try {
    const newTask = new Task({
      task_name: data.task_name,
      task_status: "To do",
      created_time: Date.now(),
    });
    return await newTask.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateTask = async (id, task_name) => {
  try {
    const task = await Task.findById(id);
    if (!task) {
      throw new Error("Task not found");
    }
    task.task_name = task_name;
    task.updated_time = Date.now();
    await task.save();
    return task;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteTask = async (id) => {
  try {
    const task = await Task.findById(id);
    if (!task) {
      throw new Error("Task not found");
    }
    task.task_status = "Delete";

    await task.save();
    return task;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.searchTask = async (keyword) => {
  try {
    const keywordCondition =
      keyword === undefined
        ? {}
        : {
            $or: [
              { task_name: { $regex: keyword } },
              { task_status: { $regex: keyword } },
              { tags: { $regex: keyword } },
            ],
          };
    const task = await Task.find({ ...keywordCondition });
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  } catch (error) {
    throw new Error(error.message);
  }
};
