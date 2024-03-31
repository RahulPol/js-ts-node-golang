const { kafka } = require("./kafka-config");

async function sendMessages(topic, messages) {
  const producer = kafka.producer();

  console.log("Connecting producer..");
  await producer.connect();
  console.log("Producer connected successfully!");

  console.log("Sending message to kafka...");
  await producer.send({
    topic,
    messages,
  });

  console.log("message sent successfully.");
  await producer.disconnect();
  console.log("producer disconnected successfully.");
}

exports.sendMessages = sendMessages;
