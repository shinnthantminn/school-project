const joi = require("joi");

module.exports = {
  schemaBody: {
    user: {
      register: {
        body: joi.object({
          username: joi.string().required(),
          email: joi.string().email().required(),
          password: joi.string().required(),
        }),
        patch: joi.object({
          username: joi.string(),
          email: joi.string().email(),
          password: joi.string(),
          avatar: joi.string(),
        }),
      },
      login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
      }),
    },
    post: {
      body: joi.object({
        title: joi.string().required(),
        image: joi.string().required(),
        description: joi.string().required(),
      }),
      patch: joi.object({
        title: joi.string(),
        image: joi.string(),
        description: joi.string(),
      }),
      comment: joi.object({
        user: joi.string().regex(/^[0-9a-fA-F]{24}$/),
        post: joi.string().regex(/^[0-9a-fA-F]{24}$/),
        comment: joi.string().required(),
      }),
    },
  },
  joiParams: {
    id: {
      user_id: joi.object({
        user_id: joi
          .string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      }),
    },
  },
};
