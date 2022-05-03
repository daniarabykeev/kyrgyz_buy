import { Input } from "antd";
import React, { useState } from "react";
import Filters from "../Filters/Filters";

const Search = ({
  searchValue,
  setSearchValue,
  price,
  setPrice,
  title,
  setTitle,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <div className="search_filters">
        <div className="products-search">
          <Input.Search
            placeholder="Search..."
            className="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div
            className="filter_txt"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
          </div>

          {showFilters ? (
            <Filters
              title={title}
              setTitle={setTitle}
              price={price}
              setPrice={setPrice}
              className="filters"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
