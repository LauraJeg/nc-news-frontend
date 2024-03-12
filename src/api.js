import axios from 'axios';

export const getArticles = () => {
    return axios.get('https://nc-news-94l5.onrender.com/api/articles').then(({data: {articles}})=> {
        return articles;
       
    })
};

export const getArticleByArticleID = (article_id) => {
    return axios.get(`https://nc-news-94l5.onrender.com/api/articles/${article_id}`).then(({data: {article}})=> {
        return article;
    })
}