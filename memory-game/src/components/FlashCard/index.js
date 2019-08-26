import React from "react";
import "./style.css";

class FlashCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {clicked:false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if(this.state.clicked) {
      console.log("you lost")
    }
    else {
      this.setState(state => ({
        clicked: true
      }))
    }
  }

  render() {
    return (
      <div className="img-container" onClick={this.handleClick}>
        <img alt={this.props.name} src={this.props.link} />
      </div>
    )
  };
}

export default FlashCard;
