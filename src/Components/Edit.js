import React, { useContext, useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { WebDataContext } from '../App'

export default function Edit() {
    const [imgUrl, setImgUrl] = useState('https://socialify.git.ci/m2ncef/OGify/image?description=0&font=Inter&language=1&name=1&owner=1&theme=Dark')
    const [title, setTitle] = useState("OGify")
    const [desc, setDesc] = useState("With OGify, add some flair to your content and see how it pops on Google, Facebook, Twitter, and beyond! ✨🚀")
    const [url, setURL] = useState("https://ogify.vercel.app")
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [keyword, setKeyword] = useState("")
    const [allKeywords, addToKeywords] = useState(["free", "meta", "tag", "meta tag", "meta tag generator", "OGify", "OG tags", "OG Meta tags"])
    const [keywordsInput, setKeywordsInput] = useState(false)
    const { setWebData } = useContext(WebDataContext)
    const imgRef = useRef()
    const handleImageError = () => {
        setImgUrl('https://socialify.git.ci/m2ncef/OGify/image?description=0&font=Inter&language=1&name=1&owner=1&theme=Dark')
    }
    const imgHandler = (e) => {
        setImgUrl(e.target.value)
        imgRef.current.style.webkitFilter = "blur(.5vh) brightness(0.5)";
        setTimeout(() => {
            imgRef.current.style.webkitFilter = "none";
        }, 1500);
    }
    const handleKeywords = () => {
        setKeywordsInput(true)
    }
    const addKeyword = () => {
        setKeywordsInput(false)
        addToKeywords([...allKeywords, keyword])
        setKeyword("")
    }
    useEffect(() => {
        setWebData({
            'image': imgUrl,
            'title': title,
            'desc': desc,
            'url': url
        })
        // eslint-disable-next-line
    }, [imgUrl, title, desc, url])
    const getCode = () => {
        setModal(true)
        setData({
            'image': imgUrl,
            'title': title,
            'desc': desc,
            'keywords': allKeywords.join(", "),
            'url': url
        })
    }
    return (
        <div className='edit-container'>
            <h1>Edit Meta Data</h1>
            {modal && <Modal setModal={setModal} data={data} />}
            <div className='edit-image'>
                <label>Image</label>
                <input defaultValue={imgUrl} type='url' onChange={imgHandler} placeholder='Cover link | 1200x628 recommended.'></input>
                <img alt="" ref={imgRef} src={imgUrl} onError={handleImageError}/>
            </div>
            <div className='edit-title'>
                <label>Title</label>
                <input defaultValue={title} placeholder='Write your title here' onChange={(e) => { setTitle(e.target.value) }}></input>
            </div>
            <div className='edit-url'>
                <label>Website Link</label>
                <input defaultValue={url} placeholder='Write your URL here' onChange={(e) => { setURL(e.target.value) }}></input>
            </div>
            <div className='edit-desc'>
                <label>Description</label>
                <textarea defaultValue={desc} rows={4} placeholder='Write your description here' onChange={(e) => { setDesc(e.target.value) }}></textarea>
            </div>
            <div className='edit-keywords'>
                <div>
                    <label>Keywords</label>
                    <p onClick={() => addToKeywords([])}>Clear</p>
                </div>
                <div>
                    {allKeywords.map((keyword, index) => {
                        return <span key={index} style={{ border: '2px solid #bababa', color: '#bababa' }}>{keyword}</span>
                    })}
                    {keywordsInput && (
                        <div className='keywords-input'>
                            <input onChange={(e) => { setKeyword(e.target.value) }} type='text' style={{ width: '13vh', padding: '1vh 4vh 1vh 1vh' }} placeholder='eg: Movies' />
                            <p onClick={addKeyword} style={{ position: 'absolute', margin: '0 2vh' }}>✅</p>
                        </div>
                    )}
                    {!keywordsInput && <span onClick={handleKeywords} style={{ cursor: 'pointer', boxShadow: '0 0 1px white'}}>+ Add Keyword</span>}
                </div>
            </div>
            <button onClick={getCode}>Get Code</button>
        </div>
    )
}
