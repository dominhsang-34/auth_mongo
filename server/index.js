const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const UserModel = require('./Models/User')

const app = express()
app.use(cors())
app.use(express.json());


mongoose
  .connect(
    "mongodb+srv://sangdo:21020717@cluster0.sz5t0n9.mongodb.net/crud"
  )
  .then((db) => {
    console.log("Kết nối MongoDB thành công");
  })
  .catch((err) => {
    console.error("Lỗi kết nối MongoDB: ");
  });


app.get("/getUsers", (req, res) => {
  UserModel.find({}).then(function (user) {
    res.json(user)
  }).catch(function (err) {
    res.json(err)
  })
})

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(
      user => {
        if (user) {
          if (user.password == password) {
            res.json ("success")
          } else {
            res.json("password is not correct")
          }
        }
    })
    .catch (err => {
      console.log("do not have user")
    })
})

app.post('/signup', (req, res) => {
  UserModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is listening")
})