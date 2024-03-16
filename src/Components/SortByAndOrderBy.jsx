function SortByAndOrderBy (setSortBy, sortBy) {

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
    </div>

};

export default SortByAndOrderBy;