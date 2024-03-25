import { useRef } from 'react';
import './App.css';
import Edit from './Components/Edit';
import Preview from './Components/Preview';

function App() {
  const urlRef = useRef()
  return (
    <div className='container'>
      <div className='main'>
        <div className='nav'>
          <h1>OGIFY</h1>
        </div>
        <div className='main-content'>
          <h1>With <font>OGIFY</font>, you can generate meta tags, edit them and preview them.</h1>
          <div>
            <input type='text' defaultValue={window.location.origin} ref={urlRef}/>
            <h3 onClick={()=>{window.location.href = "#start"}}>Start</h3>
          </div>
        </div>
      </div>
      <div id='start'>
        <Edit urlRef={urlRef}/>
        {/* <Preview /> */}
      </div>
    </div>
  );
}

export default App;
