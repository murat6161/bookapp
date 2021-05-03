import React from 'react';
import axios from 'axios'

class UpdateBook extends React.Component {

  state = {
    book_title: "",
    book_author:"",
    url:"",
    summary:"",
    publication_dt:""

  }

  async componentDidMount(){

      const id = this.props.match.params.id
      const response = await axios.get(`http://localhost:3002/books/${id}`)
      const book = response.data

      console.log("response", response.data)

      
      this.setState({

        book_title: book.book_title,
        book_author: book.book_author,
        url: book.url,
        summary: book.summary,
        publication_dt: book.publication_dt
      })
     
  }

handleFormSubmit = (e) => {
  e.preventDefault();
  const book_title = this.state.book_title
  const book_author = this.state.book_author
  const summary = this.state.summary
  const url = this.state.url
  const publication_dt = this.state.publication_dt

  //const {book_title, author, summary, url, publication_dt} = this.state
  const id = this.props.match.params.id
  const updatedBook = {
    // book_title:book_title,
    // author: author,
    // url:url,
    // summary:summary,
    // publication:publication_dt

   book_title,
   book_author,
   summary,
   url,
   publication_dt


  }

  this.props.onUpdateBook(id, updatedBook)
  this.props.history.push('/')
}

onInputChange = (e) => {
  
  this.setState({ 
    [e.target.name]: e.target.value
  })
}

  render() {
  return (
    <div className="container">
      <form className="mt-5" onSubmit={this.handleFormSubmit}>
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
            <input type="text" className="form-control" name="book_title"
            value={this.state.book_title} 
            onChange={this.onInputChange}/>
          </div>

          <div className="form-group col-md-9">
            <label htmlFor="inputname">Author</label>
            <input type="text" className="form-control" name="author" 
            value={this.state.book_author}
            onChange={this.onInputChange}/>
          </div>

          <div className="form-group col-md-9">
            <label htmlFor="inputname">About Book URL</label>
            <input type="text" className="form-control" name="url" 
            value={this.state.url}
            onChange={this.onInputChange}/>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="inputname">Publication Date</label>
            <input type="text" className="form-control" name="publication_dt" 
            value={this.state.publication_dt}
            onChange={this.onInputChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Summary</label>
            <textarea
              className="form-control"
              name="summary"
              rows="5"
              value={this.state.summary}
              onChange={this.onInputChange}
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
}

export default UpdateBook