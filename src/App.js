import React from 'react'
import BookList from "./components/BookList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBook from './components/SearchBook';


class  App extends React.Component  {
  state = {
    books : [
        {"ISBN" : "536727151", "name" : "Sefiller", "author" : "Victor Hugo", "language" : "English", "date" : "1950", "image" : "http://kbimages1-a.akamaihd.net/Images/6faa402f-1a95-4897-93ff-8286cbe0e94f/255/400/False/image.jpg"},
        {"ISBN" : "647252132", "name" : "Hayvanlar Ciftligi", "author" : "George Orwell", "language" : "Turkish", "date" : "1936", "image" : "https://img.kitapyurdu.com/v1/getImage/fn:11346129/wh:true/miw:200/mih:200"},
        {"ISBN" : "785932635", "name" : "1984", "author" : "George Orwell", "language" : "English", "date" : "1942", "image" : "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg"},
        {"ISBN" : "237890543", "name" : "Ince Memed", "author" : "Yasar Kemal", "language" : "Turkish", "date" :  "1974", "image" : "https://cdn.kidega.com/product-images-opt/publication/97/89/75/9789750807145.png?v=2020-10-17"},
        {"ISBN" : "324567890", "name" : "GunesDamlasi", "author" : "Eleni Hacudi Tunta", "language" : "Greek", "date" : "1984", "image" : "https://cdn03.ciceksepeti.com/cicek/kc8145444-1/S/gunesdamlasi-kc8145444-1-7fa726e9bde445df8e792d6f7c4b106a.jpg"}
      ],

      findBooks: ""

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

  findBook = (e) => {

    this.setState({
      findBooks: e.target.value
    })


  }

  render() {

    let filterBooks = this.state.books.filter(
      (book) => {
        return book.name.toLowerCase().indexOf(this.state.findBooks.toLowerCase()) !== -1
      }
    )
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBook
            findBookProp={this.findBook} />

            <BookList

           books= {filterBooks}
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
