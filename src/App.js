import React from 'react';
import * as timer from './features/timer/timer';


const App = () => {
  return (
    <div className="App">
      <div id='container'>
        <h1 id='title'>25 + 5 Clock</h1>
        <div id='interval-section'>
          <timer.Break />
          <timer.Session />
        </div>
        <timer.Clock />
        <timer.Buttons />
      </div>
    </div>
  );
}

export default App;
