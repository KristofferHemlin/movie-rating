import React from 'react';
import './App.css';
import AllReviews from './components/AllReviews/AllReviews.js';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllReviews/>
    </div>
  );
}

export default App;
