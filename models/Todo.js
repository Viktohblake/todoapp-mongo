const mongoose = require("mongoose");

const Todo = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The todo title is required"],
    },
    description: {
        type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);
