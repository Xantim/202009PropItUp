import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jack"} lastName={"Jackson"} age={23} hairColor={"blonde"}/> 
      <PersonCard firstName={"mary"} lastName={"Smith"} age={5} hairColor={"blue"}/>
      <PersonCard firstName={"Bob"} lastName={"Bobbers"} age={23} hairColor={"red"}/>
      
    </div>
  );
}

export default App;
