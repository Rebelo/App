
const Joi = require("@hapi/joi");


module.exports.PlanValidationSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().allow(0).required(),
    type: Joi.string().valid("monthly", "yearly").required(),
    userId: Joi.number().positive().required()
});