import React from 'react';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import './App.css';
import { Link, Route } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-header">
        <h1>App</h1>
        <Link to='/gif/messi'>Gifs de Messi</Link>
        <Link to='/gif/argentina'>Gifs de Argentina</Link>
        <Link to='/gif/autos'>Gifs de autos</Link>
        <Route 
          path="/gif/:keyword" 
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;
