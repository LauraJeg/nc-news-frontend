import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleID } from "../api";
import CommentCard from "./CommentCard";

function AllComments () {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        {comments.map((comment)=>{
            return <CommentCard key = {comment.comment_id} comment = {comment}/>
        })}
        </>
    )
};
export default AllComments;