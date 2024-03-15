import { deleteComment } from "../api";

function DeleteComment ({comment_id, setisCommentDeleted}) {
    
    function handleDelete () {
       deleteComment(comment_id)
        .then(()=>{
            setisCommentDeleted(true)
        });
    };
    return <button onClick = {handleDelete}>Delete</button>
};
export default DeleteComment;