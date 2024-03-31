const { kafka } = require("./kafka-config");

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting...");
  admin.connect();
  console.log("admin connected!");

  console.log("creating Topic [rider-updates, rider-login]...");
  admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
      {
        topic: "rider-login",
        numPartitions: 1,
      },
    ],
  });
  console.log("topic [rider-updates, rider-login] created successfully!");

  console.log("admin disconnecting..");
  admin.disconnect();
  console.log("admin disconnected!");
}

init();

// class KafkaConfig {
//   constructor() {
//     this.kafka = new Kafka({
//       clientId: "nodejs-kafka",
//       brokers: ["localhost:9093"],
//     });
//     this.producer = this.kafka.producer();
//     this.consumer = this.kafka.consumer({ groupId: "test-group" });
//   }

//   async produce(topic, messages) {
//     try {
//       await this.producer.connect();
//       await this.producer.send({
//         topic,
//         messages,
//       });
//     } catch (err) {
//       console.log(err);
//     } finally {
//       await this.producer.disconnect();
//     }
//   }

//   async consume(topic, callback) {
//     try {
//       await this.consumer.connect();
//       await this.consumer.subscribe({ topic, fromBeginning: true });
//       await this.consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//           const value = message.value.toString();
//           callback(value);
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// export default KafkaConfig;
