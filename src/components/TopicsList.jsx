import { useEffect, useState } from "react";
import { getTopicsList } from "../api";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopicsList().then((response) => {
      setTopics(response);
    });
  }, []);

  return (
    <div>
      <h2 className="page-title">Topics</h2>

      {topics.map((topic) => {
        return (
          <div className="topic-card" key={topic.slug}>
            <h3>{topic.slug}</h3>
            <p>{topic.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TopicsList;
