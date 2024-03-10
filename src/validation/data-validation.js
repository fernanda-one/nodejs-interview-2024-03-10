import Joi from "joi";

const createDataValidation = Joi.object({
    nama: Joi.string().max(100).required(),
    status: Joi.number().min(0).max(1).default(1).optional()
})
const updateDataValidation = Joi.object({
    id: Joi.number().optional(),
    nama: Joi.string().max(100).required(),
    status: Joi.number().min(0).max(1).default(1).optional()
})
export {
    createDataValidation,
    updateDataValidation
}