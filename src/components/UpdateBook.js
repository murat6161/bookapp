import React from "react";

export default function UpdateBook(props) {
  return (
    <div className="container">
      <form className="mt-5" onSubmit={props.onUpdateBook}>
        <input
          className="form-control col-3"
          style={{ backgroundColor: "yellow" }}
          id="disableInput"
          type="text"
          placeholder="Update Book"
          disabled={false}
        />

        <div className="form-row">
          <div className="form-group col-md-9">
            <label htmlFor="inputname">Name</label>
            <input type="text" className="form-control" name="name" />
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
            <input type="text" className="form-control" name="publication_dt" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
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
          value="Update book"
        />
      </form>
    </div>
  );
}
