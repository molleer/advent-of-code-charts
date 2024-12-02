const express = require("express");
const proxy = require("express-http-proxy");
const axios = require("axios");

const app = express();

app.get("/api/board", async (req, res) => {
  try {
    data = await axios.get(
      `https://adventofcode.com/${req.query.year}/leaderboard/private/view/${req.query.group_id}.json`,
      {
        headers: {
          Cookie: `session=${process.env["SESSION_ID"]}`,
        },
      }
    );
    res.json(data.data);
  } catch (error) {
    res.sendStatus(400);
    console.log(error);
  }
});

app.use("/", proxy("http://localhost:3000"));
app.listen(8080);
