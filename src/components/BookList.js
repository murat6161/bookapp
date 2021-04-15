import React from 'react'
import Button from './Button'


const BookList = (props) => {

      return (   
        <div className="row">

          {props.books.map((book)=>(

         
                <div className="col-lg-4" key={book.ISBN}>
                    <div className="card mb-4 shadow-sm">
                        <img src={book.image} alt="Sample Book" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title">{book.name}</h3>
                             <p className="card-text">{book.author}</p>
                             <p className="card-text">{book.language}</p>
                            
                                  <div className="d-flex justify-content-between align-items-center">
                                    {/* <Button 
                                       d = {props.deleteBookProp}/> */}
                                       <button type="button" onClick={() => props.deleteBookProp(book)} className="btn btn-md btn-outline-danger">Delete</button> 
                                      <h2><span className="badge badge-info">{book.date}</span></h2>
                                    </div>
                        </div>
                    </div>
                </div>
                 ))}
            </div>
      
       
        
       )
   
      }


export default BookList
