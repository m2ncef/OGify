import { useRef } from 'react';
import './App.css';
import Edit from './Components/Edit';
import Preview from './Components/Preview';

function App() {
  return (
    <div className='container'>
      <div className='main'>
        <div className='nav'>
          <h1>OGIFY</h1>
        </div>
        <div className='main-content'>
          <h1>With <font>OGIFY</font>, you can generate meta tags, edit them and preview them.</h1>
          <h3 onClick={() => { window.location.href = "#start" }}>Start</h3>
        </div>
      </div>
      <div id='start'>
        <Edit />
        <Preview />
      </div>
    </div>
  );
}

export default App;
