import React, { useEffect } from "react";
import "../style/feed.scss";
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import Post from "../components/Post";
import { usePost } from "../hook/usePost";
const Feed = () => {

const {feed, handleGetFeed, loading} = usePost()

useEffect(()=>{
    handleGetFeed()
    
},[])
if(loading || !feed){
    return (<main><h1>Feed is loading...</h1></main>)
}
console.log(feed);


  return (
    <main className="feed-page">
      <div className="posts">
       {feed.map(post =>{
          return <Post key={post._id} post={post}/>
       })}
      </div>
    </main>
  );
};

export default Feed;