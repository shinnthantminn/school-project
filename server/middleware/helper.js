const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  fMsg: (res, con, statusCode, msg, result) => {
    res.status(statusCode).json({
      con,
      msg,
      result,
    });
  },
  encode: (payload) => bcrypt.hashSync(payload, 10),
  compare: (plane, hash) => bcrypt.compareSync(plane, hash),
  token: (payload) =>
    jwt.sign(payload, process.env.KEY, {
      expiresIn: "1h",
    }),
  verify: (payload) =>
    jwt.verify(payload, process.env.KEY, (err, data) => {
      if (err) {
        throw Error(err.message);
      }
      return data;
    }),
};
