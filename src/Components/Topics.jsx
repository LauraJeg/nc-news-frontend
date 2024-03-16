import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

function Topics () {
    const [isLoading, setIsLoading]= useState(true);
    const [topics, setTopics]= useState([]);

    useEffect(()=> {
        setIsLoading(true);
        getTopics().then((topicsReturn)=> {
            setIsLoading(false);
            setTopics(topicsReturn);
        })
    }, []);
    return isLoading ? <p>Loading...</p> : (<>
        <h2>Topics</h2>
        <ul>
            {topics.map((topic)=> {
                return  <TopicCard key = {topic.slug} topic ={topic}/>
            })}
        </ul>
        </>
    )
};

export default Topics;