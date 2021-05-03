import React from "react";

class PageButton extends React.Component {

    state = {

         pageStyle : "col-lg-6"
    }

    clickHandle = async (e) => {
       
        const num =     await e.target.value
        console.log("Number : ", e.target.value)

        if (num === "2") this.setState({ pageStyle : "col-lg-6"})
        if (num === "3") this.setState({ pageStyle : "col-lg-4"})
        if (num === "4") this.setState({ pageStyle : "col-lg-3"})
        

        console.log("Page Style : ", this.state.pageStyle)

    }

    render(){
  return (
    <div>
      <button
    
       onClick={this.clickHandle}
        type="button"
       
        className="btn btn-md btn-primary col-2"
        value = "2"
        //style={{marginTop: '-50px', float:'right'}}
      >
       IKI
      </button>

      <button
       onClick={this.clickHandle}
        type="button"
        className="btn btn-md btn-primary col-2"
        value="3"
        //style={{marginTop: '-50px', float:'right'}}
      >
     UC
      </button>

      <button
       onClick={this.clickHandle}
        type="button"
        className="btn btn-md btn-primary col-2"
        //style={{marginTop: '-50px', float:'right'}}
        value="4"
      >
        DORT
      </button>
    </div>
  );
}
}

export default PageButton
