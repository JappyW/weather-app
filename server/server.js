const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/weather", async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?&lon=${lng}&lat=${lat}&days=16&key=bdf918ddf5a64a7c8092dc8b6aadfa2c`
    );
    return res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(8080);

console.log("Server has started!");
