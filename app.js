const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("./passport/local-passport");
const kakaoPassport = require("./passport/kakao-passport");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const indexRouter = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "*", // 특정 도메인 허용
  credentials: true, // 'withCredentials'를 true로 설정
};

app.use(cors(corsOptions));
app.use(
  session({
    secret: process.env.SESSION_SECRET, // 세션 ID 를 서명하는데 사용되는 키
    resave: false, // 세션을 강제로 다시 저장할지 여부를 결정
    saveUninitialized: false, // 초기회 되지 않은 세션을 저장소에 저장할지 여부를 설정
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    },
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(kakaoPassport.initialize());
app.use(kakaoPassport.session());

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
