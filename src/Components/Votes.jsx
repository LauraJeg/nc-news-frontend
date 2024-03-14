import { useEffect, useState } from "react";
import './styling/votes.css'

function Votes ({votes, commentOrArticle}) {

    const [liked, setLiked] = useState(false);
    const [newVotes, setNewVotes] = useState(votes)
    const [unliked, setUnLiked]= useState(false)

    function likeClick () {
        setLiked(!liked)    
    }

    function unLikeClick() {
        setUnLiked(!unliked)
    }
    useEffect(()=> {
        if (unliked){
            liked ? setNewVotes(votes + 2) : setNewVotes(votes)
            setUnLiked(false)
        } else{
            liked ? setNewVotes(votes + 1) : setNewVotes(votes)
        }
        
        }, [liked])

   useEffect(() => {
    if(liked){
        unliked? setNewVotes(votes -2) : setNewVotes(votes) 
        setLiked(false)
    } else{
        unliked? setNewVotes(votes - 1) : setNewVotes(votes) 
    }
    
   }, [unliked])


return (<div className={commentOrArticle}>
            <button className={unliked? 'unliked': ''} onClick ={()=> {unLikeClick()}}>Unlike</button>
            <p>Votes {`${newVotes}`}</p>
            <button className = {liked? 'liked':''} onClick={() => {likeClick()}}>
                Like
            </button>
        </div>)
};
export default Votes;