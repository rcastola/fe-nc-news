const SortMessage = (URLSortFilter, URLSortOrder) => {
  return (
    <p id="sort-message">
      Currently sorted by {URLSortFilter} {URLSortOrder}
    </p>
  );
};

export default SortMessage;
