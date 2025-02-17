const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter student name"], // Capitalized "Please"
    },
    semsester: {
      type: Number,
      required: [true, "Please enter student semsester"],
    },
    grade: {
      type: Number,
      required: [false, "Please enter student grade"],
    },
    id:{
      type:Number,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
