import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleID } from "../api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

function AllComments () {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPostComment, setIsPostComment] = useState(false);

    useEffect(()=> {
        setIsLoading(true)
        getCommentsByArticleID(article_id)
        .then((comments)=> {
            setComments(comments);
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <>
        <button disabled = {isPostComment} onClick = {()=> {setIsPostComment(true)}}>Post New Comment</button>
        {isPostComment? <PostComment/>:null}
        {comments.map((comment)=>{
            return <CommentCard key = {comment.comment_id} comment = {comment}/>
        })}
        </>
    )
};
export default AllComments;