const express = require("express");
const msProducer = require("../kafka-lib/ms-producer");

const app = express();

app.use(express.json());

app.post("/api/sendToKafka", async (req, res) => {
  const { topic, messages } = req.body;
  console.log(topic);
  console.log(messages);
  await msProducer.sendMessages(topic, messages);
  res.status(200).json({ data: "sent message" });
});

app.listen(5001, () => {
  console.log("server started");
});
