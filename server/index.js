const express = require("express");
const app = express();
const port = 3001;

const cors = require('cors')
app.use(express.json())
app.use(cors())


const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect(
  "mongodb+srv://MERN:mern1234@cluster0.gxgrrkw.mongodb.net/MERN?retryWrites=true&w=majority"

);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/createUser', async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user)
  await newUser.save()

  res.json(user)
})

app.get("/", (req, res) => {
  res.send("<h1>서비스 준비중입니다...</h1>");
});
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(3001, () => {
  // 포트 번호 3001로 고정 // node index.js or npm start 명령어 터미널에 입력 후 localhost:3001로 접속
  console.log("SERVER RUNS PERFECTLY!");
});

// 복사하고자 하는 부분 선택 후 ctrl + 드래그 : 복사
