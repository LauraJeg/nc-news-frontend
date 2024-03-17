import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByArticleID } from "../api";
import AllComments from "./AllComments";
import Votes from "./Votes";
import Error from "./Error";

function ArticlePage () {
    const {article_id} = useParams();
    const [article, setArticle]= useState({});
    const [showComments, setShowComments]= useState(false);
    const [newError, setNewError]= useState([])


    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        setIsLoading(true);
        getArticleByArticleID(article_id)
            .then((article)=> {
                setArticle(article);
                setIsLoading(false);
            })
            .catch(({response})=> {console.log(response.status, response.data.msg)
                setIsLoading(false);
            return setNewError([response.status, response.data.msg])})
    }, []);

    if (isLoading) return <p>Loading...</p>
    else if(newError.status === undefined) return <Error statuscode={newError[0]} msg={newError[1]}/>

    return (
        <>
        <div >
            <h2>{article.title}</h2>
            <img src= {article.article_img_url}/>
            <h3>By {article.author}</h3>
            <p>{article.topic} </p>
            <p>Created at {article.created_at.slice(0,10)}</p>
            <p>{article.body}</p>
            <Votes patchID = {article.article_id} votes = {article.votes} commentOrArticle = 'article'/>
        </div>
        <button onClick = {() => {setShowComments(!showComments)}} >{showComments? 'Hide comments': 'Show Comments'}</button>
        {showComments? <AllComments /> : null}
        </>
    )

}

export default ArticlePage;