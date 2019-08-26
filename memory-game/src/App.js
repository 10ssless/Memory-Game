import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Center from "./components/Center";
import FlashCard from "./components/FlashCard";
import flags from "./flags.json";


function App() {
  return (
    <Wrapper>
      <Title>test-your-memory.-dont-click-the same-flag-twice.</Title>
        <Center>
          {flags.map(item => (
            <FlashCard 
              name={item.name}
              link={item.image}
            />
          ))}
        </Center>
    </Wrapper>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
