const DB = require("../model/user");
const helper = require("../middleware/helper");
const { sendMail } = require("../middleware/mailSender");
const fs = require("fs");

const register = async (req, res, next) => {
  try {
    req.body.password = helper.encode(req.body.password);
    const newUser = await new DB(req.body).save();
    helper.fMsg(res, true, 201, "Register complete", newUser);
  } catch (e) {
    next(e.message);
  }
};

const login = async (req, res, next) => {
  try {
    const finder = await DB.findOne({ email: req.body.email });
    if (finder) {
      console.log(req.body.password);
      if (helper.compare(req.body.password, finder.password)) {
        const user = await finder.toObject();
        delete user.password;
        const token = helper.token({ id: user._id });
        user.token = token;
        helper.fMsg(res, true, 200, "Login&Register complete", user);
      } else helper.fMsg(res, false, 401, "Email or Password credential error");
    } else helper.fMsg(res, false, 401, "Email or Password credential error");
  } catch (e) {
    next(new Error(e));
  }
};

const auth = async (req, res, next) => {
  try {
    const user = req.user.toObject();
    delete user.password;
    helper.fMsg(res, true, 200, "authorization complete", user);
  } catch (e) {
    next(new Error(e));
  }
};

const verify = async (req, res, next) => {
  try {
    const finder = await DB.findOne({ email: req.body.email });
    if (finder) {
      const user = finder.toObject();
      delete user.password;
      const token = helper.token({ email: user.email });
      user.token = token;
      await sendMail(user);
      helper.fMsg(res, true, 201, "verify mail was send", user);
    } else {
      helper.fMsg(res, false, 401, "this email was no sign up in our server");
    }
  } catch (e) {
    next(new Error(e));
  }
};

const changePasswordVerify = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const data = await helper.verify(token);
      const user = await DB.findOne({ email: data.email });
      if (user) {
        helper.fMsg(res, true, 201, "authorization", user);
      } else {
        helper.fMsg(res, false, 401, "Verify email was expire");
      }
    } else helper.fMsg(res, false, 401, "Verify email was expire");
  } catch (e) {
    next(e.message);
  }
};

const passChange = async (req, res, next) => {
  try {
    const finder = await DB.findOne({ email: req.body.email });
    if (finder) {
      const passwordEncode = helper.encode(req.body.password);
      const item = await DB.findByIdAndUpdate(finder._id, {
        password: passwordEncode,
      });
      const user = item.toObject();
      delete user.password;
      helper.fMsg(res, true, 200, "password change complete", user);
    } else helper.fMsg(res, false, 401, "something wrong");
  } catch (e) {
    next(new Error(e));
  }
};

const edit = async (req, res, next) => {
  try {
    const finder = await DB.findById(req.user._id);
    if (finder) {
      if (!req.body.email) {
        if (req.body.avatar && finder.avatar) {
          fs.unlinkSync(`./upload/User/${finder.avatar}`);
        }
        await DB.findByIdAndUpdate(finder._id, req.body);
        const user = await DB.findById(finder._id);
        helper.fMsg(res, true, 201, "Update Complete", user);
      } else helper.fMsg(res, false, 401, "email editing was no allow");
    } else {
      helper.fMsg(res, false, 404, "User not found");
    }
  } catch (e) {
    next(new Error(e));
  }
};

const innerChangePassword = async (req, res, next) => {
  try {
    const finder = await DB.findById(req.user._id);
    if (finder) {
      if (helper.compare(req.body.currentPassword, finder.password)) {
        req.body.password = helper.encode(req.body.password);
        await DB.findByIdAndUpdate(finder._id, req.body);
        const user = await DB.findById(finder._id);
        helper.fMsg(res, true, 201, "Password change was complete", user);
      } else helper.fMsg(res, false, 401, "Current password was wrong");
    } else helper.fMsg(res, false, 404, "user not found");
  } catch (e) {
    next(new Error(e));
  }
};

module.exports = {
  register,
  login,
  auth,
  verify,
  changePasswordVerify,
  passChange,
  edit,
  innerChangePassword,
};
