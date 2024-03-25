import React from 'react'

export default function Preview() {
  const [title, url, desc, image] = ['OGify', 'https://ogify.vercel.app', 'With OGify, add some flair to your content and see how it pops on Google, Facebook, Twitter, and beyond! ✨🚀', 'https://socialify.git.ci/m2ncef/OGify/image?description=0&font=Inter&language=1&name=1&owner=1&theme=Dark']
  return (
    <div className='preview-container'>
      <h1>Preview</h1>
      <div className='google'>
        <label>Google</label>
        <div>
          <h2>{title}</h2>
          <h3>{url}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className='twitter'>
        <label>Twitter</label>
        <div>
          <img src={image} />
          <div>
            <h2>{title}</h2>
            <h3>{desc}</h3>
            <p>{String(url).split("//")[1]}</p>
          </div>
        </div>
      </div>
      <div className='facebook'>
        <label>Facebook</label>
        <div>
          <img src={image} />
          <div>
            <p>{String(url).split("//")[1]}</p>
            <h2>{title}</h2>
            <h3>{desc}</h3>
          </div>
        </div>
      </div>
      <div className='instagram'>
        <label>Instagram</label>
        <div>
          <img src={image} />
          <div>
            <h5>{title}</h5>
            <p>
              <img src='https://i.imgur.com/2UUA4rv.png'/>
              {String(url).split("//")[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
