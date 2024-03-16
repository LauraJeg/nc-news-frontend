import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtcilesByTopic } from "../api";
import ArticleCard from "./ArticleCard";

function SingleTopicPage ({currArticles, setCurrArticles }) {
    const {slug} = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        setIsLoading(true);
        getArtcilesByTopic(slug)
            .then((articles)=> {
                setCurrArticles(articles);
                setIsLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <>
        <h2>{slug[0].toUpperCase() + slug.slice(1)}</h2>
        <div className = 'articles'>
        {currArticles.map((article)=>{
            return <ArticleCard key = {article.article_id} article = {article}/>
        })}
        </div>
        </>
    )
};
export default SingleTopicPage;