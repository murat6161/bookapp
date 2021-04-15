import React from 'react'
import BookList from "./components/BookList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBook from './components/SearchBook';


class  App extends React.Component  {
  state = {
    books : [
        {"ISBN" : "536727151", "name" : "Sefiller", "author" : "Victor Hugo", "language" : "English", "date" : "1950"},
        {"ISBN" : "647252132", "name" : "Hayvan Ciftligi", "author" : "George Orwell", "language" : "Turkish", "date" : "1936"},
        {"ISBN" : "785932635", "name" : "1984", "author" : "George Orwell", "language" : "English", "date" : "1942"},
        {"ISBN" : "237890543", "name" : "Ince Memed", "author" : "Yahya Kemal", "language" : "Turkish", "date" :  "1974"},
        {"ISBN" : "324567890", "name" : "GunesDamlasi", "author" : "Eleni Hacudi Tunta", "language" : "Greek", "date" : "1984"}
      ]

  }

  deleteBook = (book) => {

    const newBooks = this.state.books.filter(
      b => b.ISBN !==book.ISBN
    )
      // this.setState({
      //   books: newBooks
      // })

      this.setState(state => ({books:newBooks}))
  }

  render() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBook/>
            <BookList

           books= {this.state.books}
           deleteBookProp = {this.deleteBook }

         />
           
          </div>
        </div>
      </div>
     
    </div>
  );

  }
}

export default App;
