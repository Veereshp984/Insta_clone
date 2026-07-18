const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const followUsername = req.user.username;
  const followeeUsername = req.params.username;
  if (followeeUsername == followUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }
  const isFollweeExists = await userModel.findOne({
    username: followeeUsername,
  });
  if (!isFollweeExists) {
    return res.status(404).json({
      message: "User you are trying to follow does not exist.",
    });

  }
   const isAlreadyFollowing = await followModel.findOne({
    follower: followUsername,
    followee: followeeUsername,
  });
if (isAlreadyFollowing) {

    // Request already sent
    if (isAlreadyFollowing.status === "pending") {
      return res.status(200).json({
        message: "Follow request already sent.",
        follow: isAlreadyFollowing,
      });
    }

    // Already following
    if (isAlreadyFollowing.status === "accepted") {
      return res.status(200).json({
        message: "You are already following this user.",
        follow: isAlreadyFollowing,
      });
    }

    // Previously rejected, send request again
    if (isAlreadyFollowing.status === "rejected") {
      isAlreadyFollowing.status = "pending";
      await isAlreadyFollowing.save();
    }

}
    const followRecord = await followModel.create({
    follower: followUsername,
    followee: followeeUsername,
    // status will default to "pending"
});
    return res.status(201).json({
    message: `Your follow request is sent to ${followeeUsername}`,
    follow: followRecord,
});
}



async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `You are not following ${followeeUsername}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing);

  res.status(200).json({
    message: `You have unfollowed ${followeeUsername}`,
  });
}

async function acceptFollowRequestController(req, res) {
  const followeeUsername = req.user.username;
  const followerUsername = req.params.username;

  const isFollowRequest = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
    status: "pending"
  });

  if (!isFollowRequest) {
    return res.status(404).json({
      message: "No pending follow request found.",
    });
  }
  isFollowRequest.status = "accepted"
  await isFollowRequest.save();

  return res.status(200).json(
    {
        message : "Follow request was accepted",
        isFollowRequest
    }
  )
}

async function rejectFollowRequestController(req, res) {
  const followeeUsername = req.user.username;
  const followerUsername = req.params.username;

  const isFollowRequest = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
    status: "pending"
  });

  if (!isFollowRequest) {
    return res.status(404).json({
      message: "No pending follow request found.",
    });
  }
  isFollowRequest.status = "rejected"
  await isFollowRequest.save();

  return res.status(200).json(
    {
        message : "Follow request was rejected",
        isFollowRequest
    }
  )
}

module.exports = {
  followUserController,
  unfollowUserController,
  acceptFollowRequestController,
  rejectFollowRequestController
};
