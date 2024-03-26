import { useState, createContext } from 'react';
import './App.css';
import Edit from './Components/Edit';
import Preview from './Components/Preview';

export const WebDataContext = createContext()

function App() {
  const [webData, setWebData] = useState(['OGify', 'https://ogify.vercel.app', 'With OGify, add some flair to your content and see how it pops on Google, Facebook, Twitter, and beyond! ✨🚀', 'https://socialify.git.ci/m2ncef/OGify/image?description=0&font=Inter&language=1&name=1&owner=1&theme=Dark'])
  const [dark, setDark] = useState(true)
  const changeTheme = () => {
    setDark(!dark)
    document.body.classList.toggle("light")
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
        <WebDataContext.Provider value={{webData, setWebData}}>
          <Edit />
          <Preview />
        </WebDataContext.Provider>
      </div>
      <footer>
        <span>made by <a href='https://github.com/m2ncef' style={{ textDecoration: 'none', color: 'skyblue' }}>moncef</a></span>
      </footer>
    </div>
  );
}

export default App;
