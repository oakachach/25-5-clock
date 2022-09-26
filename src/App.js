import React from 'react';


const App = () => {
  return (
    <div className="App">
      <div id='container'>
        <h1 id='title'>25 + 5 Clock</h1>
        <div id='interval-section'>
          <div id='break-section'>
            <h3>Break Length</h3>
            <div class='interval-buttons'>
              <i id ='break-decrement' class="fa-solid fa-arrow-down"></i>
              <h3 id='break-length'>5</h3>
              <i id='break-increment' class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
          <div id='session-section'>
            <h3>Session Length</h3>
            <div class='interval-buttons'>
              <i id='session-decrement' class="fa-solid fa-arrow-down"></i>
              <h3 id='session-length'>25</h3>
              <i id='session-increment' class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
        </div>
        
        <div id='clock-section'>
          <h3 id='timer-label'>Session</h3>
          <h1 id='time-left'>25:00</h1>
        </div>
        <div id='button section'>
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-pause"></i>
          <i class="fa-solid fa-rotate"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
