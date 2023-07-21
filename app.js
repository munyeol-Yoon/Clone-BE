const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

// app.get('/', (_, res) => {
//     return res.send('HI')
// })

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
