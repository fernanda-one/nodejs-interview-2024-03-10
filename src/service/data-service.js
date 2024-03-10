import { prismaClient } from "../config/database.js"
import { ResponseError } from "../error/response-error.js"
import { createDataValidation, updateDataValidation } from "../validation/data-validation.js"
import { validate } from "../validation/validation.js"

const getOneData = async (id) => {
    return prismaClient.test01.findFirst({
        where:{id:parseInt(id)}
    })
}
const getListData = async (query) => {
    let {page, limit} = query
    if (!page) page = 1
    if (!limit) limit = 20
    return prismaClient.test01.findMany({
        skip: parseInt(page - 1) * (limit -1),
        take: parseInt(limit)
    })
}
const createData = async (request) => {
    const reqData =  validate(createDataValidation, request)
    const result = await prismaClient.test01.create({
        data:{
            nama:reqData.nama,
            status: reqData.status
        }
    })
    return result
}
const updateData = async (id, req) => {
    const body = validate(updateDataValidation, req)
    const data = await  prismaClient.test01.findFirst({
        where:{id: parseInt(id)}
    })
    if (!data) throw new ResponseError(401, "data not found")
    const result = await prismaClient.test01.update({
        where:{
            id: parseInt(id)
        },
        data:{
            nama: body.nama,
            status: body.status? 1:0
        }
    })
    return result
}
const deleteData = async (id) => {
    const data = await prismaClient.test01.findFirst({
        where:{
            id:parseInt(id)
        }
    })
    if (!data) throw new ResponseError(400, "data not found")
    return prismaClient.test01.delete({
        where:{
            id:parseInt(id)
        }
    })
}

export default {
    createData,
    deleteData,
    getListData,
    getOneData,
    updateData
}
