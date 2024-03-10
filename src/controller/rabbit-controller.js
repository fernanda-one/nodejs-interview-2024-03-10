import rabbit from "../event/rabbit.js"

const createData = async (req, res, next)=>{
    try {
        const queue = 'qtest1'
        const command = 'create'
        const message = {
            command,
            data : req.body
        }
        const data = rabbit.sendQueue(queue, message)
        res.status(201).json({
            message:"create successfully",
        })
    } catch (error) {
        next(error)
    }
}

const updateData = async (req, res, next)=>{
    try {
        req.body.id = parseInt(req.params.id)
        const queue = 'qtest1'
        const command = 'update'
        const message = {
            command,
            data : req.body
        }
        const data = rabbit.sendQueue(queue, message)
        res.status(200).json({
            message:"update successfully",
        })
    } catch (error) {
        next(error)
    }
}
const deleteData =  async (req, res, next)=>{
    try {
        req.body.id = parseInt(req.params.id)
        const queue = 'qtest1'
        const command = 'delete'
        const message = {
            command,
            data : req.body
        }
        const data = rabbit.sendQueue(queue, message)
        res.status(200).json({
            message:"delete successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createData,
    deleteData,
    updateData
}