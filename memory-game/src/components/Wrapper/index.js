import React from "react";
import "./style.css";

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      score: 0, 
      topScore: 0,
      dblClick: false
    }
  }

  // handleClick() {
  //   console.log(this.state.score)
  //   this.setState(state => ({
  //       score: state.score + 1
  //     }))
  // }
  

  render() {
    return (
      <div className="wrapper">
        <div>
          <span>score: </span> {this.state.score}
        </div>
        {this.props.children}
      </div>);}
}

export default Wrapper;
