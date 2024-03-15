import { Link } from "react-router-dom";

function TopicCard ({topic}) {
    return <Link to={`/topics/${topic.slug}`}>
                <h3 >{topic.slug}</h3>
                <p>{topic.description}</p>
            </Link>
};
export default TopicCard;