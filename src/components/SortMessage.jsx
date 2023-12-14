const SortMessage = (URLSortFilter, URLSortOrder) => {
  console.log(URLSortFilter, URLSortOrder);
  return (
    <p id="sort-message">
      Currently sorted by {URLSortFilter} {URLSortOrder}
    </p>
  );
};

export default SortMessage;
