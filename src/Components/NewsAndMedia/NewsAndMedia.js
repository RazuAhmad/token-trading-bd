import React from 'react'
import newsAndMediaImg from "../../images/News and media.png"
function NewsAndMedia() {
  return (
    <div className='mt-24 mx-6 flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row      '>
      <div className='flex flex-1  '>
      <p className='flex flex-col flex-start'>
      <img className='w-full ' src={newsAndMediaImg} alt="" />
      </p>
      </div>

      <div className='text-white text-bold flex flex-1 flex-col flex-start gap-3 px-16'>
        <h2 className='text-bold  sm:text-3xl md:text-5xl text-3xl'>Access news & <br />
media portal</h2>
<p>Keep yourself updated regarding the latest news and content for BFIC Network & its ecosystem.</p>
<br />
<p>The News & Media portal comprises of all the latest videos, blog posts and social media posts regarding the Network. This helps you to learn more about updated features or relevant projects of the ecosystem.</p>
<p><button className='bg-yellow-300 px-5 py-3 rounded hover:bg-green-700'>BFIC ECOSYSTEM</button></p>
      </div>
    </div>
  )
}

export default NewsAndMedia