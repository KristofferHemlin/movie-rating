import React from 'react';
import css from './App.module.css';
import AllReviews from './components/AllReviews/AllReviews.js';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={css.App}>
      <Header/>
      <AllReviews/>
    </div>
  );
}

export default App;
