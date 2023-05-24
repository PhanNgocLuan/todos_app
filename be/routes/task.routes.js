const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controllers.js");

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask)
router.delete("/:id", taskController.deleteTask);
router.get("/search", taskController.searchTask)

module.exports = router;
