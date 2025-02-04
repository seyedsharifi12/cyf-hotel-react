import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const clearSearchInputState = () => {
    setSearchInput("");
  };

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    search(searchInput);
    clearSearchInputState();

    // console.log(setSearchInput, "<<<<<<<");
  };
  console.log(searchInput);
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
