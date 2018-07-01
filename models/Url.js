const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlSchema = new Schema({
  long_url: String,
  urlCode: String,
  created_at: Date
});
mongoose.model("url", urlSchema);
