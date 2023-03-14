import React from 'react'
import newsAndMediaImg from "../../images/News and media.png"
function NewsAndMedia() {
  return (
    <div className='flex flex-1'>
      <div className='w-full'>
      <img src={newsAndMediaImg} alt="" />
      </div>
      <div>
        <h2>Access news & <br />
media portal</h2>
<p>Keep yourself updated regarding the latest news and content for BFIC Network & its ecosystem.</p>
<br />
<p>The News & Media portal comprises of all the latest videos, blog posts and social media posts regarding the Network. This helps you to learn more about updated features or relevant projects of the ecosystem.</p>
      </div>
    </div>
  )
}

export default NewsAndMedia