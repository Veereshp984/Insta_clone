import { getFeed } from "../servies/post.api";
import { useContext } from "react";
import { PostContext } from "../post.context";


export const usePost = () =>{

const context = useContext(PostContext)
    
    const {loading,setLoading,post,setPost,feed ,setFeed} = context
    const handleGetFeed = async ()=>{
        setLoading(true)
        const data = await getFeed()
        console.log(data);
        
        setFeed(data.posts)
        setLoading(false)
    }
    return{loading , feed , post, handleGetFeed}

}