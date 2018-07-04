const shortid = require("shortid");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const Url = mongoose.model("url");

module.exports = app => {
  app.post("/api/shorten", async (req, res) => {
    const long_url = req.body.url;
    const urlCode = shortid.generate();
    const item = await Url.findOne({ long_url });
    if (item) {
      let shortUrl = keys.webHost + item.urlCode;
      res.send({ shortUrl });
    } else {
      let shortUrl = keys.webHost + urlCode;
      await new Url({
        long_url,
        urlCode
      }).save();
      res.send({ shortUrl });
    }
  });
  app.get("/api/:code", async (req, res) => {
    const { code } = req.params;
    const item = await Url.findOne({ urlCode: code });
    if (item) {
      res.redirect(item.long_url);
    }
  });
};
