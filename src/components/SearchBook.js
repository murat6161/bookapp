import React from 'react'

class SearchBook extends React.Component {

    render () {
    return (
        
       <form>
           <div className="form-row mb-5">
               <div className="col-12">
                   <br/>
                   <input 
                          value = "Search Book"
                          type="text" 
                          className="form-control" 
                          placeholder="Search Book"
                    />
               </div>
           </div>
       </form>
       
    )
    }
}

export default SearchBook 