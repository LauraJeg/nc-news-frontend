import axios from 'axios';

export const getArticles = () => {
    return axios.get('https://nc-news-94l5.onrender.com/api/articles').then(({data: {articles}})=> {
        return articles;
       
    })
};

export const getArticleByArticleID = (article_id) => {
    return axios.get(`https://nc-news-94l5.onrender.com/api/articles/${article_id}`)
        .then(({data: {article}})=> {
            return article;
        })
}

export const getCommentsByArticleID = (article_id) => {
    return axios.get(`https://nc-news-94l5.onrender.com/api/articles/${article_id}/comments`)
    .then(({data: {comments}})=> {
        return comments;
    })
}

export const patchArticleVotes = (article_id, newVotes) => {
    return axios.patch(`https://nc-news-94l5.onrender.com/api/articles/${article_id}`, newVotes)
};
export const patchCommentVotes = (comment_id, newVotes)=> {
    return axios.patch(`https://nc-news-94l5.onrender.com/api/comments/${comment_id}`, newVotes)
}