import React from 'react'
// import {Particles} from 'react-particles-js';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function Introduction() {
  return (
    <>
     
        <h1 className='text-white text-center mt-12 lg:text-7xl md:text-6xl sm:text-5xl' >  
        <Typewriter
  options={{
    strings: ['BFIC AND B-LOVE', 'in Bangladesh'],
    autoStart: true,
    loop: true,
  }}
/> 
</h1>      

<div className='flex justify-center mt-20 text-black'>
<p><Link to="/"><button className='px-20 py-2 mr-3 bg-white hover:bg-red-700 rounded-md'>Sell</button></Link></p>

  <p ><Link to="/buyToken"><button className='px-20 py-2 ml-3 bg-white hover:bg-green-700 rounded-md'>Buy</button></Link></p>
  
  

</div>

    </>
  )
}

export default Introduction