const mongoose = require("mongoose");

const resultSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter subject name"], // Capitalized "Please"
    },
    semsester: {
      type: Number,
      required: [true, "Please enter subject semsester"],
    },
    grade: {
      type: Number,
      required: [false, "Please enter subject grade"],
    },
    id:{
      type:Number,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
