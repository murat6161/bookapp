import React from "react";


const BookList = (props) => {
  return (
    <div className="row">
      {props.books.map((book) => (
        <div className="col-lg-4" key={book.url}>
          <div className="card mb-4 shadow-sm">
            {/* <img src={{}} alt="Sample Book" className="card-img-top"/> */}
            <div className="card-body">
              <h4 className="card text-center card text-dark bg-warning mb-3">
                {book.book_title}
              </h4>
              <p className="card text-center text-dark bg-light mb-3 fs-4">
                {book.book_author}
              </p>
              <br />
              <p className="card-text">{book.summary}</p>

              <div className="d-flex justify-content-between align-items-center">
              

                <a href={book.url} target="_blank">
          
                  <button className="btn btn-md btn-info">About Book</button>
                </a>
                <button
                  type="button"
                  onClick={() => props.deleteBookProp(book)}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
              </div>
              <br />
              <h6>
                <span className="badge badge-light">
                  Publication Date: {book.publication_dt}
                </span>
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;


//<a href={book.url} target="_blank">
//{" "}