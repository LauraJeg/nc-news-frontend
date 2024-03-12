import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleID } from "../api";

function AllComments () {
    const {article_id} = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true)
        getCommentsByArticleID(article_id)
        .then((comments)=> {
            console.log(comments);
            setComments(comments);
            setIsLoading(false)
        })
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <>
        {comments.map((comment)=>{
            return <p>{comment.body}</p>
        })}
        </>
    )
};
export default AllComments;