import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard';
import './styling/articleHomePage.css'
import { getArticles } from '../api';

function Articles ({currArticles, setCurrArticles}) {
    const [isLoading, setIsLoading] = useState(true)
   
    useEffect(()=> {
        setIsLoading(true);
        getArticles()
            .then((articles)=>{
                setCurrArticles(articles.slice(0,10))
                setIsLoading(false)
            })
    }, []);

    if (isLoading) return <p>Loading...</p>

    return (
        <div className = 'articles'>
        {currArticles.map((article)=>{
            return <ArticleCard key = {article.article_id} article = {article}/>
        })}
        </div>
    )
}

export default Articles;