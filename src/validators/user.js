const { celebrate, Joi, errors, Segments } = require('celebrate');


module.exports = {
    createUser: {
        [Segments.BODY] : {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
        }
    }
}
