import React, { useState } from 'react';
import './App.css';
import { helloif } from './asm-cpp/helloif';

function App() {
  const [count, setCount] = useState(0)
  console.log('---------------- asmret=', helloif(11, 22, setCount))

  return (
    <div className="App">
      hello world!!
      <div>count= {count}</div>
  </div>
  );
}

export default App;
