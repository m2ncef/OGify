import React, { useContext } from 'react'
import { WebDataContext } from '../App'

export default function Preview() {
  const {webData} = useContext(WebDataContext)
  return (
    <div className='preview-container'>
      <h1>Preview</h1>
      <div className='google'>
        <label>Google</label>
        <div>
          <h2>{webData.title}</h2>
          <h3>{webData.url}</h3>
          <p>{webData.desc}</p>
        </div>
      </div>
      <div className='twitter'>
        <label>Twitter</label>
        <div>
          <img alt="" src={webData.image} />
          <div>
            <h2>{webData.title}</h2>
            <h3>{webData.desc}</h3>
            <p>{String(webData.url).split("//")[1]}</p>
          </div>
        </div>
      </div>
      <div className='facebook'>
        <label>Facebook</label>
        <div>
          <img alt="" src={webData.image} />
          <div>
            <p>{String(webData.url).split("//")[1]}</p>
            <h2>{webData.title}</h2>
            <h3>{webData.desc}</h3>
          </div>
        </div>
      </div>
      <div className='instagram'>
        <label>Instagram</label>
        <div>
          <img alt="" src={webData.image} />
          <div>
            <h5>{webData.title}</h5>
            <p>
              <img alt="" src='https://i.imgur.com/2UUA4rv.png'/>
              {String(webData.url).split("//")[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
