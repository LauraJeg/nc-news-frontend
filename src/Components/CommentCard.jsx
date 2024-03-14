import Votes from "./Votes";

function CommentCard ({comment}) {
    return (<>
        <p>{comment.body}</p>
        <p>{comment.author} Created on {comment.created_at.slice(0,10)}</p>
        <Votes key = {comment.comment_id} votes = {comment.votes} commentOrArticle = 'comment'/>
    </>)
};
export default CommentCard;