import dataService from "../service/data-service.js"

const getOneData = async (req, res, next) => {
    try {
        const data = await dataService.getOneData(req.params.id)
        res.status(200).json({
            message:"success",
            data
        })
    } catch (error) {
        next(error)
    }
}
const getListData = async (req, res, next)=>{
    try {
        const data = await dataService.getListData(req.query)
        res.status(200).json({
            message:"success",
            data
        })
    } catch (error) {
        next(error)
    }
}
const createData = async (req, res, next)=>{
    try {
        const data = await dataService.createData(req.body)
        res.status(201).json({
            message:"create successfully",
            data
        })
    } catch (error) {
        next(error)
    }
}

const updateData = async (req, res, next)=>{
    try {
        const data = await dataService.updateData(req.params.id,req.body)
        res.status(200).json({
            message:"update successfully",
            data
        })
    } catch (error) {
        next(error)
    }
}
const deleteData =  async (req, res, next)=>{
    try {
        await dataService.deleteData(req.params.id)
        res.status(200).json({
            message:"delete successfully"
        })
    } catch (error) {
        next(error)
    }
}
export default {
    createData,
    getOneData,
    getListData,
    updateData,
    deleteData
}