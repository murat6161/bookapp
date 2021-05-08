import React from "react";

class PageButton extends React.Component {
  state = {
    pageStyle: "value",
  };

  clickHandle = async (e) => {
    const num = await e.target.value;

    if (num === "2") this.setState({ pageStyle: "col-lg-6" });
    if (num === "3") this.setState({ pageStyle: "col-lg-4" });
    if (num === "4") this.setState({ pageStyle: "col-lg-3" });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.changeStyleProp("col-lg-6")}
          type="button"
          className="btn btn-md btn-primary col-1"
          value="2"
          style={{marginRight: "10px", marginBottom:"20px", marginTop:"20px"}}
        >
          2
        </button>

        <button
          onClick={() => this.props.changeStyleProp("col-lg-4")}
          type="button"
          className="btn btn-md btn-primary col-1"
          value="3"
          style={{marginRight: "10px"}}
        >
          3
        </button>

        <button
          onClick={() => this.props.changeStyleProp("col-lg-3")}
          type="button"
          className="btn btn-md btn-primary col-1"
          value="4"
        >
          4
        </button>
      </div>
    );
  }
}

export default PageButton;
