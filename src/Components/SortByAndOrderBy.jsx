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
          <option value="created_at">created date</option>
          <option value="comment_count">comments</option>
          <option value="votes">votes</option>
        </select>
    </div>

};

export default SortByAndOrderBy;