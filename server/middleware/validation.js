const helper = require("./helper");
const userDB = require("../model/user");

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        helper.fMsg(res, false, 401, result.error.details[0].message);
      } else next();
    };
  },
  validateParam: (schema, name) => {
    return (req, res, next) => {
      const obj = {};
      obj[name] = req.params[name];
      const result = schema.validate(obj);
      console.log(result.error);
      if (result.error) {
        helper.fMsg(res, false, 401, result.error.details[0].message);
      } else next();
    };
  },
  validateToken: async (req, res, next) => {
    if (req.headers.authorization) {
      try {
        const token = req.headers.authorization.split(" ")[1];
        const data = await helper.verify(token);
        const user = await userDB.findById(data.id);
        if (user) {
          req.user = user;
          next();
        } else helper.fMsg(res, false, 401, "tokenization error");
      } catch (e) {
        next(new Error(e.message));
      }
    } else helper.fMsg(res, false, 401, "tokenization error");
  },
  validUnique: (db, ...name) => {
    return async (req, res, next) => {
      const num = [];
      for (const x of name) {
        const obj = {};
        obj[x] = req.body[x];
        const finder = await db.findOne(obj);
        num.push(x);
        if (finder) {
          helper.fMsg(res, false, 422, `This ${x} was existing in our server`);
        } else if (num.length === name.length) {
          next();
        }
      }
    };
  },
};
