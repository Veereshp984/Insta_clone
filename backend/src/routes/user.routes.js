const express = require("express");
const userController = require("../controllers/user.controller");
const { identifyUser } = require("../middlewares/auth.middleware");
const userRouter = express.Router();


/**
 * @Route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */
userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.followUserController,
);

/**
 * @Route delete/api/users/unfollow/:userid
 * @description unFollow a user
 * @access Private
 */
userRouter.delete(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowUserController,
);

/**
 * @route patch /api/users/follow/ :username/accept
 * @description accept the follow request
 * @access private
 */
userRouter.patch("/follow/:username/accept",identifyUser,userController.acceptFollowRequestController)


/**
 * @route patch /api/users/follow/ :username/reject
 * @description reject the follow request
 * @access private
 *  rejectFollowRequestController
 */
userRouter.patch("/follow/:username/reject",identifyUser,userController.rejectFollowRequestController)





module.exports = userRouter;
