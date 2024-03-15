import Votes from "./Votes";
import './styling/commentCard.css'
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import DeleteComment from "./DeleteComment";

function CommentCard ({comment}) {
    const { currentUser } = useContext(UserContext);
    const [isCommentDeleted, setisCommentDeleted]= useState(false)
    return isCommentDeleted? <p>Comment is Deleted</p> : (<div className = 'commentCard'>
        <p>{comment.body}</p>
        <p>{comment.author} Created on {comment.created_at.slice(0,10)}</p>
        <Votes key = {comment.comment_id} votes = {comment.votes} commentOrArticle = 'comment' patchID = {comment.comment_id}/>
        {currentUser.username=== comment.author ? <DeleteComment comment_id= {comment.comment_id} setisCommentDeleted = {setisCommentDeleted}/>: null}
    </div>)
};
export default CommentCard;