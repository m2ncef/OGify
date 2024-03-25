import React from 'react'
import { CopyBlock, obsidian } from 'react-code-blocks'
export default function Modal({ data, setModal }) {
    const code = `<!-- PRIMARY META TAGS -->
<title>${data.title}</title>
<meta name="title" content="${data.title}" />
<meta name="description" content="${data.desc}">
<meta name="keywords" content="${data.keywords}">
<!-- Open Graph / Meta (Facebook / Instagram / Whatsapp) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${data.url}" />
<meta property="og:title" content="${data.title}" />
<meta property="og:description" content="${data.desc}" />
<meta property="og:image" content="${data.image}" />
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${data.url}" />
<meta property="twitter:title" content="${data.title}" />
<meta property="twitter:description" content="${data.desc}" />
<meta property="twitter:image" content="${data.image}" />
<!-- Meta Tags Generated with ${window.location.host} -->`
    return (
        <div className='modal'>
            <h1 onClick={()=>{setModal(false)}}>❌</h1>
            <CopyBlock
                customStyle={{
                    margin: '0 10vh',
                    padding: '0',
                    fontSize: 'small',
                    width: '80%'
                }}
                startingLineNumber={3}
                wrapLongLines
                language='html'
                text={code}
                theme={obsidian}
                showLineNumbers={false}
                codeBlock
            />
        </div>
    )
}
