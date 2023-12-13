import { useEffect, useState } from "react";
import { getTopicsList } from "../api";
import { Link } from "react-router-dom";

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
            <Link to={`/articles?topic=${topic.slug}`}>
              <h3>{topic.slug}</h3>
            </Link>
            <p>{topic.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TopicsList;
