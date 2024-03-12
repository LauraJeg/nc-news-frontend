import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByArticleID } from "../api";

function ArticlePage () {
    const {article_id} = useParams();
    const [article, setArticle]= useState({})
    useEffect(()=> {
        getArticleByArticleID(article_id)
            .then((data)=> {
                console.log(data)
            })
    }, [])
    return <p>Hello I am an article Page</p>

}

export default ArticlePage;