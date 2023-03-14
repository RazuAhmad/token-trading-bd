import React from 'react'

function PeerToPeer() {
  return (
    <>
    <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Peer To Peer(P2P)</h2>
    
    <form className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 SellForm-container_main ">

      <div className='flex justify-center gap-4'>
      <p>
            <label for="payment"></label><br />
          <select className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
            <option value="volvo">BFIC</option>
            <option value="saab">Blove</option>
  
          </select>
            </p>
            
            <p>
            <label for="payment"></label><br />
          <select className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
            <option value="volvo">Buy</option>
            <option value="saab">Sell</option>
  
          </select>
            </p>
      </div>

            <p >
            <label>Per Coin Rate</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="number" step="0.01" min="10" max="100" required  placeholder='Enter Your amount'/>
            </p>
           
            <p>
            <label>Active Phone Number</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Phone Number'/>
            </p>
            
            <div >
            <input  className='text-white   bg-green-700 border-2 ml-2 px-12 py-2 rounded cursor-pointer'  type="submit" value="Submit" />
            </div>
        </form>

    </>
  )
}

export default PeerToPeer