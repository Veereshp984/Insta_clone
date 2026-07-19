const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const  {identifyUser}  = require("../middlewares/auth.middleware")


/**
 * @Routes POST /api/posts [protected only with valid token]
 * @description create a post with the content and caption provided in the req body
 * - req.body = {caption , image-file}
 */

/*  /api/posts/ */
postRouter.post("/",upload.single("image"), identifyUser ,postController.createPostController)

/**
 * @Route GET /api/posts/ [protected]
 * @description return an detail about post created by the user
 */
postRouter.get("/",identifyUser,postController.getPostController);

/**
 * @Route GET /api/posts/details/:postid
 *  @description- return detail about specific post with the id. also check whether the post
 * belongs to the user that is request come from 
 */

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)


/**
 * @route Post /api/posts/like/:postid
 * @description like a post with the id provided in the request params
 */
postRouter.post("/like/:postId", identifyUser ,postController.likePostController )


/**
 * @route GET /api/posts/feed
 * @description get all the post created in the feed
 * @access private
 */
postRouter.get("/feed",identifyUser,postController.getFeedController)



module.exports = postRouter
