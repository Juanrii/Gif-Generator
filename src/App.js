import React, {useState} from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('messi');

  return (
    <div className="App">
      <section className="App-header">
      <button onClick={() => setKeyword('san lorenzo')}>Cambiar Gif</button>
       <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
