import './styling/articleHomePage.css'
import { Link } from 'react-router-dom';

function ArticleCard ({article}) {
    return (
        <Link to={`/article/${article.article_id}`}>
        <div className = 'articleCard'>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <img src={article.article_img_url}/>
        </div>
        </Link>
    )
};

export default ArticleCard;