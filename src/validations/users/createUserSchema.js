const Joi = require('joi');

const validateBody = (params) => {
      const schema = Joi.object({
          displayName: Joi.string().min(8).required(),
          email: Joi.string().email().required(),
          password: Joi.string().min(6).required(), 
          image: Joi.string(),
      });
      const { error, value } = schema.validate(params);
      if (error) return error;
      return value;
  };

  module.exports = {
      validateBody,
  };