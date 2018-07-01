const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Url");
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
