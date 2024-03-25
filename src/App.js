import { useState } from 'react';
import './App.css';
import Edit from './Components/Edit';
import Preview from './Components/Preview';

function App() {
  const [dark, setDark] = useState(true)
  const changeTheme = ()=>{
    setDark(!dark)
    alert("light theme will be added soon 👍")
  }
  return (
    <div className='container'>
      <div className='main'>
        <div className='nav'>
          <h1>OGIFY</h1>
          <h2 onClick={changeTheme}>{dark ? "🌚" : "🌞"}</h2>
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
      <footer>
        <span>made by <a href='https://github.com/m2ncef' style={{textDecoration:'none', color:'skyblue'}}>moncef</a></span>
      </footer>
    </div>
  );
}

export default App;
