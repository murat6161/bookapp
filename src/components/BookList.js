import React from "react";
import { Link } from "react-router-dom";

const BookList = (props) => {
  return (
    <div className="row">
      {props.books.map((book, i) => (

   
        
        <div className="col-lg-6" key={i}>
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
                <a href={book.url} target="_blank" rel="noreferrer">
                  <button className="btn btn-md btn-info">About Book</button>
                </a>
               

                <Link
                  to={`update/${book.id}`}
                  type="button"
                  className="btn btn-md btn-success"
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  Update Book
                </Link>


                

              </div>
              <br />
              <h6>
                <span className="badge badge-light">
                  Publication Date: {book.publication_dt}
                </span>
              </h6>
              <button
                  type="button"
                  onClick={() => props.deleteBookProp(book)}
                  className="btn btn-md btn-outline-danger"
                  style={{float:'right'}}
                >
                  Delete
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default BookList;

// {" "}
