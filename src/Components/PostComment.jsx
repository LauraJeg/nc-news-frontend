import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { postNewComment } from "../api";

function PostComment ({article_id, setComments, setIsPostComment}) {
    const { currentUser} = useContext(UserContext);
    const [newComment, setNewComment] = useState('');
    const [newError, setNewError]= useState([]);
    
    function handleSubmit (e) {
        e.preventDefault();
        postNewComment(article_id, currentUser.username, newComment)
        .then((comment) => {
            setNewComment('')
            setIsPostComment(false)
            setComments((comments) => {
                return [comment, ...comments];
              });
        })
        .catch(({response})=> {
        return setNewError([response.status, response.data.msg])})
    };

    if(newError[0] !== undefined) return <Error statuscode={newError[0]} msg={newError[1]}/>
    
    return (
        <form id='post-comment'  onSubmit={handleSubmit}>
            <label htmlFor='comment-body'></label>
            <textarea type='text' name='comment-body' placeholder="Type your comment here" rows = "3" onChange={(e)=> setNewComment(e.target.value)}></textarea>
            <button type = 'submit'>Post Comment</button>
        </form>
    )
};
export default PostComment;