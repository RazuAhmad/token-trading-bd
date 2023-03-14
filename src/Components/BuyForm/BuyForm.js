import React, { useState } from 'react'

function BuyForm() {
  const [currentDate,setCurrentDate]=useState(new Date().toISOString().slice(0,10));

  return (
    <>
      <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Buy Your Token Now!</h2>

      <form className='SellForm-container_main border-4 border-white rounded-3xl shadow-md bg-gray-900 max-w-xl  mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 bg-white-700'>

        <p>
            <label for="payment"></label><br />
          <select className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
            <option value="volvo">BFIC</option>
            <option value="saab">BLove</option>
  
          </select>
            </p>

          <p >
            <label>Amount</label><br />
            <input  className='w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="number"  placeholder='Enter Your amount'/>
            </p>

            <p>
            <label>Wallet Address</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Your Personal Wallet Address'/>
            </p>

            <p>
            <label for="phone">Active Phone Number</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="tel"  placeholder='Enter Your Phone Number'/>
            </p>

            <p>
            <label for="payment">Payment Option:</label><br />
            <select className='bg-gray-700 text-white text-bold rounded rounded-5' id="payment">
  <option value="volvo">Bkash</option>
  <option value="saab">Nagad</option>
  <option value="saab">Bank Transfer</option>

  
</select>
            </p>

           
          

            <p>
            <label>Date of Buy</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="date" defaultValue={currentDate} onChange={(e) => setCurrentDate(e.target.value)}/>
            </p>
           
           
            
            <div >
            <input className='text-white   bg-green-700 border-2 border-red-450 px-12 py-2 rounded cursor-pointer'  type="submit" value="Submit" />
            </div>
            
        </form>
    </>
  )
}

export default BuyForm