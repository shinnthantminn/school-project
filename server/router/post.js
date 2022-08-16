const router = require("express").Router();
const { saveOneImage } = require("../middleware/imageTransfer");
const {
  validateBody,
  validateToken,
  validUnique,
  validateParam,
} = require("../middleware/validation");
const controller = require("../controller/post");
const helper = require("../middleware/helper");
const { schemaBody } = require("../middleware/joiSchema");

//private
//url:http://localhost:4000/api/v1/post/add
//add post with authorization token
router.post(
  "/add",
  validateToken,
  saveOneImage("image", "Post"),
  validateBody(schemaBody.post.body),
  controller.addPost
);

//public
//url:http://localhost:4000/api/v1/post/:page
//get all post by pagination
router.get("/:page", controller.getAllPost);

//private
//url:http://localhost:4000/api/v1/post/edit/:post
//edit post
router.patch(
  "/edit/:post",
  validateToken,
  saveOneImage("image", "Post"),
  validateBody(schemaBody.post.patch),
  controller.editPost
);

//private
//url:http://localhost:4000/api/v1/post/drop/:post
//deletePost with permission
router.delete("/drop/:post", validateToken, controller.deletePost);

//private
//url:http://localhost:4000/api/v1/post/add/comment/:post
//add comment
router.post(
  "/add/comment/:post",
  validateToken,
  validateBody(schemaBody.post.comment),
  controller.addComment
);

//private
//url:http://localhost:4000/api/v1/post/drop/comment/:comment_id/
//drop comment
router.delete(
  "/drop/comment/:comment_id",
  validateToken,
  controller.dropComment
);

//public
//url:http://localhost:4000/api/v1/post/get/lastest
//post get by id
router.get("/per/:id",controller.GetById)

//public
//url:http://localhost:4000/api/v1/post/get/lastest
//get 5 latest post
router.get("/get/latest", controller.GetLatestPost);

module.exports = router;
