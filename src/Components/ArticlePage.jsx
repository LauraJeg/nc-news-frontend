import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByArticleID } from "../api";
import AllComments from "./AllComments";
import Votes from "./Votes";

function ArticlePage () {
    const {article_id} = useParams();
    const [article, setArticle]= useState({});

    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        setIsLoading(true);
        getArticleByArticleID(article_id)
            .then((article)=> {
                setArticle(article);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <>
        <div >
            <h2>{article.title}</h2>
            <img src= {article.article_img_url}/>
            <h3>By {article.author}</h3>
            <p>{article.topic} </p>
            <p>Created at {article.created_at.slice(0,10)}</p>
            {/* link to article page with topic */}
            <p>{article.body}</p>
            <Votes votes = {article.votes} commentOrArticle = 'article'/>
        </div>
        <AllComments/>
        </>
    )

}

export default ArticlePage;