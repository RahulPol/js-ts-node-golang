import express from "express";
import controller from "./kafka-lib/controller";
import _ from "./receiver";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.send([{ name: "a" }, { name: "b" }]);
});

app.post("api/sendToKafka", controller.sendMessageToKafka);

app.listen(5002, () => {
  console.log("server started");
});
