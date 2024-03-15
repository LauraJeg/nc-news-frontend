import { deleteComment } from "../api";

function DeleteComment ({comment, setComments}) {
    
    function handleDelete () {
       deleteComment(comment.comment_id)
        .then(()=>{
            setComments((comments)=> {
                console.log(comment.comment_id, comments)
                return comments.map((commentMap)=> {
                    if (comment.comment_id !== commentMap.comment_id){
                        return commentMap;
                    };
                });
            });
        });
    };
    return <button onClick = {handleDelete}>Delete</button>
};
export default DeleteComment;