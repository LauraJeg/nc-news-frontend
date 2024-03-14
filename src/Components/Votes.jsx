import { useEffect, useState } from "react";
import './styling/votes.css'
import { patchArticleVotes, patchCommentVotes } from "../api";

function Votes ({votes, commentOrArticle, patchID}) {

    const [liked, setLiked] = useState(false);
    const [newVotes, setNewVotes] = useState(votes)
    const [unliked, setUnLiked]= useState(false)

    function votedFunc (num) {
        setNewVotes(newVotes + num);
        if(commentOrArticle === 'article') {
            patchArticleVotes(patchID, {inc_votes: num})
                .catch((err)=> setNewVotes(newVotes - num))
        } else if(commentOrArticle === 'comment'){
            patchCommentVotes(patchID, {inc_votes: num})
                .catch((err)=> setNewVotes(newVotes - num))
        }
    }

    function likeClick () {
        setLiked(!liked) 
        if (unliked){
            votedFunc(2)
            setUnLiked(false)
        } else{
            liked ? votedFunc(-1) : votedFunc(1)
        }   
    }

    function unLikeClick() {
        setUnLiked(!unliked)
        if(liked){
            votedFunc(-2)
            setLiked(false)
        } else{
            unliked? votedFunc(1) : votedFunc(-1)
        }
    }


return (<div className={commentOrArticle}>
            <button className={unliked? 'unliked': ''} onClick ={()=> {unLikeClick()}}>Unlike</button>
            <p>Votes {`${newVotes}`}</p>
            <button className = {liked? 'liked':''} onClick={() => {likeClick()}}>
                Like
            </button>
        </div>)
};
export default Votes;