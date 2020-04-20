import React from 'react';
import './App.css';

const App = () => {
  const APP_ID = "05c2d0cb";
  const APP_KEY = "c2c2a2fe0efcf347b4bea463809269c0";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

    return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
  );
}

export default App;
