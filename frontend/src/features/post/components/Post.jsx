import React from "react";
import { FaRegHeart ,FaHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { usePost } from "../hook/usePost";


const Post = ({ post }) => {

 const {handleLike , handleUnLike , loading } = usePost()

  
  
  return (
    <div className="post">
      {/* Header */}
      <div className="header">
        <div className="user">
          <div className="profile">
            <img src={post.user.profile_Image} alt="Profile" />
          </div>

          <div className="info">
            <h4>{post.user.username}</h4>
            <span>Tokyo, Japan</span>
          </div>
        </div>

        <BsThreeDots className="menu-icon" />
      </div>

      {/* Post Image */}
      <img className="post-image" src={post.imgUrl} alt="Post" />

      {/* Action Buttons */}
      <div className="actions">
        <div className="left-icons">
          {
            post.isLiked ? (<FaHeart onClick={()=> handleUnLike(post._id)} className="icon like" id="likes"/>) : (<FaRegHeart onClick={()=> handleLike(post._id)} className="icon" id="likes"/>)
          }
          <FaRegComment className="icon" />
          <FiSend className="icon" />
        </div>

        <div className="right-icons">
          <FaRegBookmark className="icon" />
        </div>
      </div>

      {/* Caption */}
      <div className="caption">
        <span className="username">{post.user.username}</span>
        <span className="postCaption"> {post.caption}</span>
      </div>
    </div>
  );
};

export default Post;
