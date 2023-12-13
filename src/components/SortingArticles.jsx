import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SortingArticles = () => {
  const [sortValue, setSortValue] = useState("");

  function handleSubmit(event) {
    // const value = event.target;
    // const sortData = new sortData(value);
    // console.log(sortData, "event");
    const sortFilter = URLSearchParams();
    console.log(sortFilter);
  }

  return (
    <form id="sorting-component" onSubmit={handleSubmit}>
      Sort articles by:
      <select name="sort_by">
        <option value="date">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      {/* <select name="order">
        <option value="ASC">ascending</option>
        <option value="DESC">descending</option>
      </select> */}
      <button>Go</button>
    </form>
  );
};

export default SortingArticles;
