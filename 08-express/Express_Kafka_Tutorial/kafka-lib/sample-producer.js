const { kafka } = require("./kafka-config");

async function init() {
  try {
    const producer = kafka.producer();

    console.log("Connecting producer");
    await producer.connect();
    console.log("Producer connected successfully!");

    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          key: "location-update",
          value: JSON.stringify({ name: "tony stark", loc: "SOUTH" }),
        },
      ],
    });

    await producer.disconnect();
  } catch (e) {
    console.log(`error: ${e}`);
  }
}

init();
