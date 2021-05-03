import React from "react";


const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;


class SearchAuthor extends React.Component {

   
  formSubmit = (e) => {
    e.preventDefault(); // Varsayilan Davranisi Durdurduk ve sayfa yenilemesi olmadi
  };

  

    //console.log("search Text", searchText)
    //this.props.findAuthorProp()
  

  render() {
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
    );
  }
}

export default SearchAuthor;

// class Search extends Component {
//     constructor(props){
//       super(props);
//       this.timeout =  0;
//     }
  
//     doSearch(evt){
//       var searchText = evt.target.value; // this is the search text
//       if(this.timeout) clearTimeout(this.timeout);
//       this.timeout = setTimeout(() => {
//         //search function
//       }, 300);
//     }
