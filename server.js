const users = require('./db')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello! Node.js");
});

app.get('/users', (req, res) => {
    res.json(users)
  })

app.get('/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
})

app.post('/users', (req, res) => {
    users.push(req.body)
    let json = req.body
    res.send(`Add new user '${json.username}' completed.`)
  })

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});