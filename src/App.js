import React, {Component} from "react";
import BookList from "./components/BookList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchBook from "./components/SearchBook";
import axios from "axios";
import SearchAuthor from "./components/SearchAuthor";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import AddButton from "./components/AddButton";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";

class App extends Component {
  state = {
    books: [],
    findBooks: "",
    author: "Stephen King",
  };

  /*************************************************************************/
  /*************************************************************************/

  //API-KEY
  async componentDidMount() {
   // this.getBooks();
  }

  //API Key
  async getBooks() {
    const response = await axios.get(
      `https://api.nytimes.com/svc/books/v3/reviews.json?author=${this.state.author}&api-key=8xzemOIdqbZoHoEbX6OGpUDGhL5MxBtt`
    );
    this.setState({ books: response.data.results });
  }

  //API KEY
  findAuthor = (e) => {
    this.setState({ author: e.target.value });
    setTimeout(() => this.getBooks(), 8000);
  };

  /*************************************************************************/
  /*************************************************************************/

  /*************************************************************************/
  /*************************************************************************/

  //JSON-SERVER
   async componentDidMount() {
     this.getBookss();
   }

  // //JSON SERVER
   async getBookss() {
     const response = await axios.get("http://localhost:3002/books");
     this.setState({ books: response.data });
   }

  //**********************************************************************//
  //**********************************************************************//

  deleteBook = async (book) => {
    axios.delete(`http://localhost:3002/books/${book.id}`);
    const newBooks = this.state.books.filter(
      (element) => element.id !== book.id
    );
    this.setState((state) => ({ books: newBooks }));
  };

  //**********************************************************************//

  findBook = (e) => {
    this.setState({
      findBooks: e.target.value,
    });
  };

  //**********************************************************************//

  addBook = async (book) => {
    if (!book.book_title) {
      alert("Enter a Book name");
    } else {
      await axios.post(`http://localhost:3002/books/`, book);
      this.setState((state) => ({ books: state.books.concat([book]) }));
      alert("New Book Added");
      this.getBookss();
    }
  };

  //**********************************************************************/

  render() {
    let filterBooks = this.state.books.filter((book) => {
      return (
        book.book_title
          .toLowerCase()
          .indexOf(this.state.findBooks.toLowerCase()) !== -1
      );
    });

    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBook findOneBook={this.findBook} />

                      <SearchAuthor findBookAuthor={this.findAuthor} />
                    </div>
                  </div>

                  <AddButton />

                  <ThemeContextProvider>
                    <BookList
                      books={filterBooks}
                      deleteBookProp={this.deleteBook}
                    />
                  </ThemeContextProvider>
                </>
              )}
            ></Route>

            <Route
              path="/add"
              render={({ history }) => (
                <AddBook
                  onAddBook={(book) => {
                    this.addBook(book);

                    if (book.book_title) {
                      history.push("/");
                    }
                  }}
                />
              )}
            ></Route>

            <Route path="/update" component={UpdateBook}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
