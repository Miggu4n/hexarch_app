const mongoose = require("mongoose");

const birthdaySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  birthday: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Birthday", birthdaySchema);
