import React from 'react'

class SearchAuthor extends React.Component {

   
    formSubmit = (e)=>{
        e.preventDefault() // Varsayilan Davranisi Durdurduk ve sayfa yenilemesi olmadi
    }


    render () {
    return (
        <>
       <form onSubmit={this.formSubmit}>
           <div className="form-row mb-5">
               <div className="col-6">
                   Search Author
                 
                   

                  <input 
                          onChange={this.props.findAuthorProp}
                          type="text" 
                          className="form-control" 
                          placeholder="Call Author's Books"
                         
                    />

                
               </div>

               
           </div>
       </form>

       
               
       </>

       
       
    )
    }
}

export default SearchAuthor