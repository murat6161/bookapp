import React from 'react'
import BookList from "./components/BookList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBook from './components/SearchBook';
import axios from 'axios';
import SearchAuthor from './components/SearchAuthor';
import AddBook from './components/AddBook'
import UpdateBook from './components/UpdateBook'


class  App extends React.Component  {
  state = {
      //  books : [
      //      {url : "536727151", book_title : "Sefiller", book_author : "Victor Hugo", summary : "English", publication_dt : "1950", image : "http://kbimages1-a.akamaihd.net/Images/6faa402f-1a95-4897-93ff-8286cbe0e94f/255/400/False/image.jpg"},
      //      {url : "647252132", book_title : "Hayvanlar Ciftligi", book_author : "George Orwell", summary : "Turkish", publication_dt : "1936", image : "https://img.kitapyurdu.com/v1/getImage/fn:11346129/wh:true/miw:200/mih:200"},
      //      {url : "785932635", book_title : "1984", book_author : "George Orwell", summary : "English", publication_dt : "1942", image : "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg"},
      //      {url : "237890543", book_title : "Ince Memed", book_author : "Yasar Kemal", summary : "Turkish", publication_dt :  "1974", image : "https://cdn.kidega.com/product-images-opt/publication/97/89/75/9789750807145.png?v=2020-10-17"},
      //      {url : "324567890", book_title : "GunesDamlasi", book_author : "Eleni Hacudi Tunta", summary : "Greek", publication_dt : "1984", image : "https://cdn03.ciceksepeti.com/cicek/kc8145444-1/S/gunesdamlasi-kc8145444-1-7fa726e9bde445df8e792d6f7c4b106a.jpg"}
      //    ],
      books: [],

      findBooks: "",
      author: ""

  }

  
    //API-KEY
    //  async componentDidMount() {
    //    const response = await axios.get("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=8xzemOIdqbZoHoEbX6OGpUDGhL5MxBtt")
    //    console.log("response",response.data.results)
    //    this.setState({books: response.data.results})
    //  }


  //  async componentDidUpdate() {
  //     const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${this.state.author}&api-key=8xzemOIdqbZoHoEbX6OGpUDGhL5MxBtt`)
  //     console.log("response",response.data.results)
  //     this.setState({books: response.data.results})
  // }


  //JSON-SERVER
  async componentDidMount(){
    const response = await axios.get("http://localhost:3002/books")
    console.log("response",response)
    this.setState({books: response.data})
    
  }


  

   deleteBook = async (book) => {

    //console.log("book", book.url)

    //axios.delete(`http://localhost:3002/books/${book.url}`)

     const newBooks = this.state.books.filter(
       b => b.url !==book.url
     )
      //this.setState({ books: newBooks })

       this.setState(state => ({books:newBooks}))
      
   }

  findBook = (e) => {
    this.setState({
      findBooks: e.target.value
    })
  }

  findAuthor = (e) => {
    this.setState({
      author: e.target.value  
    })
  }


  
  render() {
  let filterBooks = this.state.books.filter(
      (book) => {
        return book.book_title.toLowerCase().indexOf(this.state.findBooks.toLowerCase()) !== -1
      }
    )
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <SearchBook
              findBookProp={this.findBook} 
            />

            <SearchAuthor
              findAuthorProp={this.findAuthor}
            />

          <AddBook/>
          <br/>
          <UpdateBook/>
        

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
