const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_, res) => {
  return res.send("HI");
});

app.use("/api", indexRouter);

// 에러 핸들링 미들웨어 정의
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const errorMessage = err.message || "서버 에러";

  res.status(status).json({
    errorMessage,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
