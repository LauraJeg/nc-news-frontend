function PostComment () {
    return (
        <form id='post-comment' >
            <label htmlFor='comment-body'></label>
            <textarea type='text' name='comment-body' placeholder="Type your comment here" rows = "3" ></textarea>
            <button type = 'submit'>Post Comment</button>
        </form>
    )
};
export default PostComment;