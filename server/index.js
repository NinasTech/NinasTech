require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
const { PORT } = process.env;
const { seed, getNinas, createNina, getNina } = require("./controller.js");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'client/build')));

// DEV
app.post("/seed", seed);

// NINAS
app.post("/ninas", createNina);
app.get("/ninas", getNinas);
app.get("/ninas/:id", getNina);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/build/index.html'));
});

app.listen(PORT || 5000, () => console.log(`up on ${PORT || 5000}`));
