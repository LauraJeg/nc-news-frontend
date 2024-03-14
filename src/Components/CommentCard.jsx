import Votes from "./Votes";
import './styling/commentCard.css'

function CommentCard ({comment}) {
    return (<div className = 'commentCard'>
        <p>{comment.body}</p>
        <p>{comment.author} Created on {comment.created_at.slice(0,10)}</p>
        <Votes key = {comment.comment_id} votes = {comment.votes} commentOrArticle = 'comment'/>
    </div>)
};
export default CommentCard;