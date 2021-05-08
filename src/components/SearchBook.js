import React from "react";


const formSubmit = (e) => {
  e.preventDefault();
};

const SearchBook = (props) => {
 

  
    return (
      <form onSubmit={formSubmit} style={{marginTop:"20px"}}>
        <div className="form-row mb-5">
          <div className="col-6">
            Search Book
            <input
              onChange={props.findOneBook}
              type="text"
              className="form-control"
              placeholder="Search Book With the Book Name"
            />
          </div>
        </div>
      </form>
    );
  }


export default SearchBook
