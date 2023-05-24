const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task_name: {
    type: String,
    require: true,
    unique: true,
  },
  task_status: { type: String },
  created_time: { type: Date, default: Date.now },
  updated_time: { type: Date, default: Date.now },
  tags: { type: String },
});

module.exports = mongoose.model("task", taskSchema);
