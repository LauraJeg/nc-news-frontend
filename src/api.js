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
};


export const postNewComment = (article_id, username, body) => {
    const comment = {username:username,
    body:body}
    return axios.post(`https://nc-news-94l5.onrender.com/api/articles/${article_id}/comments`, comment)
    .then(({data})=> data.comment)
    .catch((err)=> console.log(err))
};

export const deleteComment = (comment_id) => {
    return axios.delete(`https://nc-news-94l5.onrender.com/api/comments/${comment_id}`)
};

export const getTopics = () => {
    return axios.get(`https://nc-news-94l5.onrender.com/api/topics`)
    .then(({data})=> data.topics)
}
export const getArtcilesByTopic = (slug) => {
    return axios.get(`https://nc-news-94l5.onrender.com/api/articles?topic=${slug}`).then(({data})=> {
        return data.articles
    })
};