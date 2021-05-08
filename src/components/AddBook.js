import React, { Component } from "react";
import serialize from "form-serialize";

export default class AddBook extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    const newBook = serialize(e.target, { hash: true });
    this.props.onAddBook(newBook);
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control col-3"
            style={{ backgroundColor: "yellow" }}
            id="disableInput"
            type="text"
            placeholder="Fill The Form To Add A Book"
            disabled={false}
          />

          <div className="form-row">
            <div className="form-group col-md-9">
              <label htmlFor="inputname">Name</label>
              <input type="text" className="form-control" name="book_title" />
            </div>

            <div className="form-group col-md-9">
              <label htmlFor="inputname">Author</label>
              <input type="text" className="form-control" name="author" />
            </div>

            <div className="form-group col-md-9">
              <label htmlFor="inputname">About Book URL</label>
              <input type="text" className="form-control" name="url" />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputname">Publication Date</label>
              <input
                type="text"
                className="form-control"
                name="publication_dt"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-11">
              <label htmlFor="overviewTextarea">Summary</label>
              <textarea
                className="form-control"
                name="summary"
                rows="5"
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-danger btn-block col-2"
            value="Add book"
          />
        </form>
      </div>
    );
  }
}


