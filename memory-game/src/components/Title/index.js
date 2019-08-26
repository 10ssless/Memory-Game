import React from "react";
import "./style.css";

// const prep = cc => {
//   let str = [];
//   for (let i = 0; cc.length; i++) {
//     if (cc.substring(i, i + 1) === "-") {
//       str.push(" ")
//     } else {
//       str.push(cc[i])
//     }
//   }
//   return str.join("")
// }

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, count: 0 };
    // let title = props.children.split(" ")
    // this.words = title.map(prep)
    this.words = props.children.split("-")
  }

  tick() {
    this.setState(state => ({
      index: state.count % this.words.length,
      count: state.count+1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 600);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2 className="title">{this.words[this.state.index]}</h2>
    );
  }
}

export default Title;
