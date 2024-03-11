import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard';
import './styling/articleHomePage.css'

function Articles ({currArticles, setCurrArticles}) {
    const [isLoading, setIsLoading] = useState(true)
    function getArticles () {
        setIsLoading(true);
        return axios.get('https://nc-news-94l5.onrender.com/api/articles').then(({data})=> {
            setCurrArticles(data.articles.slice(0,10))
            setIsLoading(false)
        })
    }
    useEffect(()=> {
        getArticles()
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

export default Articles