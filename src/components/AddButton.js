import React from 'react'
import {Link} from 'react-router-dom'


export default function AddButton() {
    return (
        
        
       
                
               <Link

                  to="/add"
                  type="button"
                 
                  className="btn btn-md btn-primary col-2"
                  style={{marginTop: '-50px', float:'right'}}
                >
                  Add Book
                </Link>

               
              
             
       
    )
}
