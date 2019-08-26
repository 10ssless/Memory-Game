import React from "react";
import "./style.css";

class Center extends React.Component {
  constructor(props) {
      super(props)    
  }

  render() {
    return (
      <div className="flags">{this.props.children}</div>
    )}
}

export default Center;
