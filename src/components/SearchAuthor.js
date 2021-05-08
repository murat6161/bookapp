import React from "react";

const formSubmit = (e) => {
  e.preventDefault();
};

const SearchAuthor = (props) => {
  
  
    return (
      <>
        <form onSubmit={formSubmit}>
          <div className="form-row mb-5">
            <div className="col-6">
              Search Author
              <input
                onChange={props.findBookAuthor}
                type="text"
                className="form-control"
                placeholder="Call Author's Books"
              />
            </div>
          </div>
        </form>
      </>
    );
  }


export default SearchAuthor
