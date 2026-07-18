const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const  {identifyUser}  = require("../middlewares/auth.middleware")


/**
 * POST /api/posts [protected only with valid token]
 * - req.body = {caption , image-file}
 */

/*  /api/posts/ */
postRouter.post("/",upload.single("image"), identifyUser ,postController.createPostController)

/**
 * GET /api/posts/ [protected]
 */
postRouter.get("/",identifyUser,postController.getPostController);

/**
 * GET /api/posts/details/:postid
 * - return detail about specific post with the id. also check whether the post
 * belongs to the user that is request come from 
 */

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)







module.exports = postRouter
