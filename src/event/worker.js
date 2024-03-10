import dataService from "../service/data-service.js"
import rabbit from "./rabbit.js"

const worker = async ()=> {
    const queue = 'qtest1'
    await rabbit.consumeQueue(queue, handleMessage)
}

const handleMessage = async (message) => {
    const route = message.fields.routingKey
    const {command, data} = JSON.parse(message.content.toString())
    let response = ''
    switch (command) {
        case 'create':
            response = await dataService.createData(data)
            break;
        case 'update':
            response = await dataService.updateData(data.id, data)
            break;
        case 'delete':
            response = await dataService.deleteData(data.id)
            break;
        default:
            break;
    }
}    

export default worker;