import React from 'react';
import './App.css';
import { aaa00, aaa01, aaa02 } from './libs/aaaaa';

function App() {
  console.log('---- ret00 = ', aaa00('aaa000', 0))
  const persons = aaa01(['aaa001', 'bbb002'], 1)
  console.log('---- ret01 = ', ...persons)
  const argbuf = new Uint8Array([11, 22, 33])
  const ret02 = aaa02(argbuf, 2)
  console.log('---- ret02 = ', ret02)

  return (
    <div className="App">
      hello world!!
    </div>
  );
}

export default App;
