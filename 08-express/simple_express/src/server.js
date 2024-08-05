const express = require("express");

const app = express();

// with express.json middleware if any request has application/json as content type
// the request body will automatically parsed into json and you can use it directly
app.use(express.json());

// const router = express.Router();
// router.get("/home", (req, res) => {
//   res.json({ message: "home" });
// });
// app.use(router);

app.get("/", (req, res) => {
  res.send("hello");
});

const todos = [];
app.post("/todos", (req, res) => {
  const { title } = req.body; // destructing title property from body

  console.log(title);

  todos.push(req.body);
  res.json(title);
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  console.log(id);

  console.log(todos);
  const todo = todos.find((todo) => todo.id == id);
  console.log(todo);

  res.json(todo);
});

app.listen(3002, () => {
  console.log("server started ");
});
