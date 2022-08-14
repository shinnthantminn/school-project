const helper = require("../middleware/helper");
const DB = require("../model/post");
const userDB = require("../model/user");
const commentDB = require("../model/comment");
const fs = require("fs");

const addPost = async (req, res, next) => {
  try {
    const finder = await userDB.findById(req.user.id);
    if (finder) {
      req.body.user = finder._id;
      const postItem = await new DB(req.body).save();
      const post = await DB.findById(postItem._id).populate(
        "user comment",
        "-password"
      );
      helper.fMsg(res, true, 201, "user Post upload complete", post);
    } else {
      helper.fMsg(res, false, 404, "user no found");
    }
  } catch (e) {
    next(new Error(e));
  }
};

const getAllPost = async (req, res, next) => {
  try {
    const page = +req.params.page;
    const limit = +process.env.LIMIT;
    const reqPage = page >= 1 && page - 1;
    const skipCount = reqPage * limit;
    const post = await DB.find()
      .skip(skipCount)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("user comment", "-password");
    helper.fMsg(res, true, 201, "get all post with pagination", post);
  } catch (e) {
    next(new Error(e));
  }
};

const editPost = async (req, res, next) => {
  try {
    const finder = await DB.findById(req.params.post);
    if (finder.user._id.equals(req.user._id)) {
      if (finder) {
        if (req.body.image && finder.image) {
          fs.unlinkSync(`./upload/Post/${finder.image}`);
        }
        await DB.findByIdAndUpdate(finder._id, req.body);
        const post = await DB.findById(finder._id).populate(
          "user comment",
          "-password"
        );
        helper.fMsg(res, true, 201, "post update was complete", post);
      } else {
        helper.fMsg(res, false, 404, "post no found");
      }
    } else
      helper.fMsg(
        res,
        false,
        401,
        "you have no permission to delete this post"
      );
  } catch (e) {
    next(new Error(e));
  }
};

const deletePost = async (req, res, next) => {
  try {
    const finder = await DB.findById(req.params.post);
    if (finder.user._id.equals(req.user._id)) {
      if (finder) {
        fs.unlinkSync(`./upload/Post/${finder.image}`);
        await commentDB.deleteMany({ post: req.params.post });
        await DB.findByIdAndDelete(finder._id);
        helper.fMsg(res, true, 204, "post Delete was complete");
      } else {
        helper.fMsg(res, false, 404, "post no found");
      }
    } else
      helper.fMsg(
        res,
        false,
        401,
        "you have no permission to delete this post"
      );
  } catch (e) {
    next(new Error(e));
  }
};

const addComment = async (req, res, next) => {
  try {
    const finder = await DB.findById(req.params.post);
    if (finder) {
      const data = {
        user: req.user._id,
        post: finder._id,
        comment: req.body.comment,
      };
      console.log(data);
      const commentItem = await new commentDB(data).save();
      await DB.findByIdAndUpdate(finder._id, {
        $push: { comment: commentItem },
      });
      const post = await DB.findById(finder._id).populate(
        "comment user",
        "-password"
      );
      helper.fMsg(res, true, 201, "add comment complete", post);
    } else {
      helper.fMsg(res, false, 404, "post no found");
    }
  } catch (e) {
    next(new Error(e));
  }
};

const dropComment = async (req, res, next) => {
  try {
    const finder = await commentDB.findById(req.params.comment_id);
    const postFinder = await DB.findById(req.params.post_id);
    if (finder && postFinder) {
      await DB.findByIdAndUpdate(postFinder._id, {
        $pull: { comment: finder._id },
      });
      await commentDB.findByIdAndDelete(finder._id);
      const post = DB.findById(postFinder._id).populate(
        "user comment",
        "-password"
      );
      helper.fMsg(res, true, 201, "drop comment complete", post);
    } else helper.fMsg(res, false, 404, "something not found");
  } catch (e) {
    next(new Error(e));
  }
};

const GetById = async (req, res, next) => {
  try {
    const finder = await DB.findById(req.params.id).populate(
      "user comment",
      "-password"
    );
    if (finder) {
      helper.fMsg(res, true, 200, "post found", finder);
    } else helper.fMsg(res, false, 401, "post no found");
  } catch (e) {
    next(new Error(e.message));
  }
};

module.exports = {
  addPost,
  getAllPost,
  editPost,
  deletePost,
  addComment,
  dropComment,
  GetById,
};
