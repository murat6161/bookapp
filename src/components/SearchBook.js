import React from "react";

class SearchBook extends React.Component {
  // state = {
  //     findBook: ""
  // }

  // onChangeEvent = (e) => {

  //     this.setState({
  //         findBook: e.target.value

  //     })
  // }

  formSubmit = (e) => {
    e.preventDefault(); // Varsayilan Davranisi Durdurduk ve sayfa yenilemesi olmadi
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="form-row mb-5">
          <div className="col-6">
            Search Book
            <input
              onChange={this.props.findBookProp}
              type="text"
              className="form-control"
              placeholder="Search Book With the Book Name"
              // value={this.props.findBookProp}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBook;
