import React from 'react';
import './App.css';
import FactsStarWars from './components/FactsStarWars';
import UsersPhoto from './components/UsersPhoto';

function App() {
  return (
    <div className='container mt-3'>
      <div>
        <p>Задача 1</p>
        <FactsStarWars />
      </div>
      <hr />
      <div>
        <p>Задача 2</p>
        <UsersPhoto />
      </div>
    </div>
  );
}

export default App;
