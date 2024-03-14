import Votes from "./Votes";
import './styling/commentCard.css'
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import DeleteComment from "./DeleteComment";

function CommentCard ({comment}) {
    const { currentUser } = useContext(UserContext);
    return (<div className = 'commentCard'>
        <p>{comment.body}</p>
        <p>{comment.author} Created on {comment.created_at.slice(0,10)}</p>
        <Votes key = {comment.comment_id} votes = {comment.votes} commentOrArticle = 'comment' patchID = {comment.comment_id}/>
        {currentUser.username=== comment.author ? <DeleteComment/>: null}
    </div>)
};
export default CommentCard;