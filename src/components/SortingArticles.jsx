import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SortingArticles = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortFilter = searchParams.get("sort_by");
  const sortOrder = searchParams.get("order");

  function handleSubmit() {
    setSortValue(sortFilter);
    setOrderValue(sortOrder);
  }

  return (
    <div>
      <form id="sorting-component" onSubmit={handleSubmit}>
        Sort articles by:
        <select name="sort_by">
          <option value="created_at">Date (default)</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <select name="order">
          <option value="DESC">descending (default)</option>
          <option value="ASC">ascending</option>
        </select>
        <button>Go</button>
      </form>
    </div>
  );
};

export default SortingArticles;
