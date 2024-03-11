import './styling/articleHomePage.css'

function ArticleCard ({article}) {
    return (
        <div className = 'articleCard'>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <img src={article.article_img_url}/>
        </div>
    )
};

export default ArticleCard;