import { getFeed , createPost , likePost , unlikePost} from "../servies/post.api";
import { useContext , useEffect } from "react";
import { PostContext } from "../post.context";


export const usePost = () =>{

const context = useContext(PostContext)
    
    const {loading,setLoading,post,setPost,feed ,setFeed} = context
    const handleGetFeed = async (showLoading = true)=>{
        if(showLoading) setLoading(true)
        const data = await getFeed()
        console.log(data);
        setFeed(data.posts)
        if(showLoading) setLoading(false)
    }
    
const handleCreatePost = async (imageFile,caption) =>{
    setLoading(true)
    const data = await createPost(imageFile,caption)
    setFeed([data.post, ...feed])
    setLoading(false)
}

const handleLike = async (post)=>{
   
    const data = await likePost(post)
    await handleGetFeed(false)
    
}

const handleUnLike = async (post)=>{
    
    const data = await unlikePost(post)
    await handleGetFeed(false)
    
}



    return{loading , feed , post, handleGetFeed , handleCreatePost , handleLike , handleUnLike}

}
