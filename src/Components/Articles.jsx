import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard';
import './styling/articleHomePage.css'
import { getArticles } from '../api';
import SortByAndOrderBy from './SortByAndOrderBy';

function Articles ({currArticles, setCurrArticles}) {
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");
    const [error, setError] = useState(false);

    useEffect(()=> {
        setIsLoading(true);
        getArticles(sortBy, orderBy)
            .then((articles)=>{
                setCurrArticles(articles.slice(0,10))
                setIsLoading(false)
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
              });
    }, [sortBy, orderBy]);

    if (isLoading) return <p>Loading...</p>
    if (error) {
        return <NotFound />;
      }

    return ( <>
        <SortByAndOrderBy orderBy={orderBy} setOrderBy={setOrderBy} setSortBy={setSortBy} sortBy={sortBy}/>

        <div className = 'articles'>
        {currArticles.map((article)=>{
            return <ArticleCard key = {article.article_id} article = {article}/>
        })}
        </div>
        </>
    )
}

export default Articles;