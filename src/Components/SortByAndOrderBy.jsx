function SortByAndOrderBy (orderBy, setOrderBy, setSortBy, sortBy) {

    return <div>
        <label htmlFor="sort">Sort articles by: </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="created_at">Created date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <label htmlFor="order-button">Order by:</label>
          <button id="order-button">{orderBy}ending</button>
    </div>

};

export default SortByAndOrderBy;