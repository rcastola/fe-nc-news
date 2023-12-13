import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SortingArticles = ({ children }) => {
  const [sortValue, setSortValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const sortFilter = searchParams.get("sort_by");

  function handleSubmit(event) {
    setSortValue(sortFilter);
  }
  // console.log(sortValue, "sort value");

  return (
    <div>
      <form id="sorting-component" onSubmit={handleSubmit}>
        Sort articles by:
        <select name="sort_by">
          <option value="">All</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        {/* <select name="order">
        <option value="ASC">ascending</option>
        <option value="DESC">descending</option>
      </select> */}
        <button>Go</button>
      </form>
      {children}
    </div>
  );
};

export default SortingArticles;
