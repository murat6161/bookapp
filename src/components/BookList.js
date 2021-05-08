import React from "react";
import { Link } from "react-router-dom";
import PageButton from "./PageButton";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends React.Component {
  state = {
    vall: "col-lg-6",
  };

  changeStyle = async (val) => {
    await this.setState({
      vall: val,
    });
  };

  render() {
    

    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { changeTheme, isDarkTheme, dark, light } = contextTheme;
          const theme = isDarkTheme ? dark : light;

          return (
            <>
              <button
                type="button"
                className="btn btn-sm btn-info"
                style={{ marginTop: "-20px" }}
                onClick={changeTheme}
              >
                Change Theme
              </button>

              <h1 style={{ textAlign: "center", color: "red" }}> Book List</h1>

              <div className="row" style={{ backgroundColor: theme.background }}>
                <PageButton changeStyleProp={this.changeStyle} />

                {this.props.books.map((book) => (
                  <div className={this.state.vall} key={book.id}>
                    <div className="card mb-4 shadow-sm">
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
                            <button className="btn btn-md btn-info">
                              About Book
                            </button>
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
                          onClick={() => this.props.deleteBookProp(book)}
                          className="btn btn-md btn-outline-danger"
                          style={{ float: "right" }}
                        >
                          Delete
                        </button>

                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
