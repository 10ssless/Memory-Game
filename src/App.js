import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Center from "./components/Center";
import FlashCard from "./components/FlashCard";
import flags from "./flags.json";


class App extends React.Component {
  
  state = {
    flags,
    clicked:[],
    topScore:0,
    current:""
  }

  //shuffle array
  shuffle = () => {
    const flags = this.state.flags.sort((a, b) => {
      return 0.5 - Math.random()
    });
    this.setState({flags})
  }

  // handle which flag was clicked
  handleClick = id => {
    if (this.state.clicked.includes(id)) {
        
      this.setState(state => ({
        clicked: []
      }))
    } 
    else {
      this.setState(state => ({
        clicked: [...state.clicked, id],
        topScore: state.clicked.length+1 > state.topScore ? state.clicked.length+1 : state.topScore
      }))
    }
    this.shuffle()
  }

  handleMouseEnter = name => {
    this.setState({country:name})
  }
  
  handleMouseLeave = () => {
    this.setState({country:""})
  }

  render(){
    return (
      <Wrapper>
        <Title>test-your-memory.-don't-click-the same-flag-twice.</Title>
          <div id="tab">
            <span className="scores score">score: {this.state.clicked.length}</span> 
            <span className="scores top-score">top score: {this.state.topScore}</span>
          </div>
          <Center>
            {this.state.flags.map(item => (
              <FlashCard 
                id={item.id}
                key={item.id}
                name={item.name}
                link={item.image}
                handleClick={this.handleClick}
                handleMouseEnter={this.handleMouseEnter}  
                handleMouseLeave={this.handleMouseLeave}
              />
            ))}
          </Center>
          <div id="caption">{this.state.country}</div>
      </Wrapper>
    )
  }
}


export default App;
