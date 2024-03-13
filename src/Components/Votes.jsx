import Heart from './Hearts';
import './styling/votes.css'

function Votes ({votes, commentOrArticle}) {
return (<div className={commentOrArticle}>
            <p>Votes {votes}</p>
            <Heart/>
        </div>)
};
export default Votes;