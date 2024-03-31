const { kafka } = require("../kafka-lib/kafka-config");

async function init() {
  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({ topic: "rider-updates", fromBeginning: true });
  await consumer.subscribe({ topic: "rider-login", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        value: message.value.toString(),
      });
    },
  });
}

init();
