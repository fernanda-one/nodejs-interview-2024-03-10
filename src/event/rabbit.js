import { connect } from "amqplib"
import 'dotenv/config'
const connection = await connect(process.env.RABBITMQ_URL)


const sendQueue = async (queue ,msg) => {
    try {
        const channel = await connection.createChannel();
        await channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
        // setTimeout(() => connection.close(), 500);
    } catch (error) {
    }
};
const consumeQueue = async (queue, callback) => {
    const channel = await connection.createChannel();
    channel.assertQueue(queue, { durable: false });
    let data = ''
    channel.consume(queue, async (message) => {
        callback(message)
    }, { noAck: true });
};


export default {
    sendQueue,
    consumeQueue
}