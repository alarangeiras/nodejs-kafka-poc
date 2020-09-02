const { Kafka } = require('kafkajs')

const brokersString = process.env.KAFKA_BROKERS;
const brokers = brokersString.split(',');

module.exports = new Kafka({
  clientId: 'my-app',
  brokers: brokers
});